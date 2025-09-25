import { NextResponse } from 'next/server';
import Airtable from 'airtable';

// Configure Airtable
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_TOKEN
}).base(process.env.AIRTABLE_BASE_ID || 'app0dxnWbpTs3hxFL');

export async function GET(request) {
  try {
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