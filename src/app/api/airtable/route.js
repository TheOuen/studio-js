import { NextResponse } from 'next/server';
import Airtable from 'airtable';

// Configure Airtable only if API key is present
let base = null;
if (process.env.AIRTABLE_API_TOKEN) {
  base = new Airtable({
    apiKey: process.env.AIRTABLE_API_TOKEN
  }).base(process.env.AIRTABLE_BASE_ID || 'app0dxnWbpTs3hxFL');
}

export async function GET(request) {
  try {
    if (!base) {
      return NextResponse.json({
        success: false,
        error: 'Airtable is not configured'
      }, { status: 503 });
    }

    const { searchParams } = new URL(request.url);
    const table = searchParams.get('table') || 'Projects';

    const records = [];

    await base(table).select({
      maxRecords: 100,
      view: "Grid view"
    }).eachPage((pageRecords, fetchNextPage) => {
      pageRecords.forEach((record) => {
        records.push({
          id: record.id,
          fields: record.fields
        });
      });
      fetchNextPage();
    });

    return NextResponse.json({
      success: true,
      data: records,
      count: records.length
    });
  } catch (error) {
    console.error('Airtable error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    if (!base) {
      return NextResponse.json({
        success: false,
        error: 'Airtable is not configured'
      }, { status: 503 });
    }

    const body = await request.json();
    const { table = 'Projects', fields } = body;

    const record = await base(table).create(fields);

    return NextResponse.json({
      success: true,
      data: {
        id: record.id,
        fields: record.fields
      }
    });
  } catch (error) {
    console.error('Airtable error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}