import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Test Airtable connection
    const response = await fetch('https://api.airtable.com/v0/meta/bases', {
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_TOKEN}`
      }
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json({
        success: false,
        error: `API Error: ${response.status} - ${error}`
      }, { status: response.status });
    }

    const data = await response.json();

    // Find Lank Chilled base
    const lankChilledBase = data.bases?.find(base =>
      base.name.toLowerCase().includes('lank') ||
      base.name.toLowerCase().includes('chilled')
    );

    return NextResponse.json({
      success: true,
      bases: data.bases?.map(b => ({
        id: b.id,
        name: b.name,
        permissionLevel: b.permissionLevel
      })),
      lankChilledBase: lankChilledBase || null,
      totalBases: data.bases?.length || 0
    });
  } catch (error) {
    console.error('Test error:', error);
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}