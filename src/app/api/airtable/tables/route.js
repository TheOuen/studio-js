import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const baseId = process.env.AIRTABLE_BASE_ID || 'app0dxnWbpTs3hxFL';

    // Get base schema to see available tables
    const response = await fetch(`https://api.airtable.com/v0/meta/bases/${baseId}/tables`, {
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_TOKEN}`
      }
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json({
        success: false,
        error: `API Error: ${response.status} - ${error}`,
        baseId
      }, { status: response.status });
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      baseId,
      tables: data.tables?.map(t => ({
        id: t.id,
        name: t.name,
        description: t.description,
        primaryFieldId: t.primaryFieldId
      })),
      totalTables: data.tables?.length || 0
    });
  } catch (error) {
    console.error('Tables error:', error);
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}