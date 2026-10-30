import { getAccessToken } from './auth';

const SPREADSHEET_ID_KEY = 'SENA_SPREADSHEET_ID';

export const useGoogleSheets = () => {
  const getSpreadsheetId = async (accessToken: string): Promise<string> => {
    let id = localStorage.getItem(SPREADSHEET_ID_KEY);
    if (id) return id;

    // Create new spreadsheet
    const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        properties: { title: 'Registro de Aprendices SENA' }
      })
    });

    if (!response.ok) {
      throw new Error('Error al crear la hoja de cálculo');
    }

    const data = await response.json();
    id = data.spreadsheetId;
    localStorage.setItem(SPREADSHEET_ID_KEY, id!);

    // Add headers
    await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/Sheet1!A1:append?valueInputOption=RAW`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          values: [['Tipo documento', 'Nombre', 'Celular', 'Correo', 'Número ficha', 'Programa']]
        })
      }
    );

    return id!;
  };

  const appendApprenticeData = async (apprenticeData: any) => {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      throw new Error('No hay acceso autorizado. Por favor, inicia sesión.');
    }
    
    const spreadsheetId = await getSpreadsheetId(accessToken);

    const values = [
      [
        apprenticeData.documentType,
        apprenticeData.name,
        apprenticeData.phone,
        apprenticeData.email,
        apprenticeData.fichaNumber,
        apprenticeData.programName
      ]
    ];

    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A1:append?valueInputOption=RAW`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ values })
      }
    );

    if (!response.ok) {
      throw new Error('Error al guardar en Google Sheets');
    }
    
    console.log('Datos guardados exitosamente');
  };

  return { appendApprenticeData };
};

