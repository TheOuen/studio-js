import Airtable from 'airtable';

// Initialize Airtable
let base = null;

if (process.env.AIRTABLE_API_TOKEN && process.env.AIRTABLE_BASE_ID) {
  base = new Airtable({
    apiKey: process.env.AIRTABLE_API_TOKEN
  }).base(process.env.AIRTABLE_BASE_ID);
}

// Table names
export const TABLES = {
  PROJECTS: 'Projects',
  SERVICES: 'Services',
  TEAM: 'Team',
  CONTACTS: 'Contacts'
};

// Fetch records from a table
export async function fetchRecords(tableName, options = {}) {
  if (!base) {
    throw new Error('Airtable is not configured. Please check your API token.');
  }

  const records = [];

  try {
    await base(tableName).select({
      maxRecords: options.maxRecords || 100,
      view: options.view || "Grid view",
      sort: options.sort || [],
      filterByFormula: options.filterByFormula || ''
    }).eachPage((pageRecords, fetchNextPage) => {
      pageRecords.forEach((record) => {
        records.push({
          id: record.id,
          ...record.fields
        });
      });
      fetchNextPage();
    });

    return records;
  } catch (error) {
    console.error(`Error fetching records from ${tableName}:`, error);
    throw error;
  }
}

// Create a record in a table
export async function createRecord(tableName, fields) {
  if (!base) {
    throw new Error('Airtable is not configured. Please check your API token.');
  }

  try {
    const record = await base(tableName).create(fields);
    return {
      id: record.id,
      ...record.fields
    };
  } catch (error) {
    console.error(`Error creating record in ${tableName}:`, error);
    throw error;
  }
}

// Update a record in a table
export async function updateRecord(tableName, recordId, fields) {
  if (!base) {
    throw new Error('Airtable is not configured. Please check your API token.');
  }

  try {
    const record = await base(tableName).update(recordId, fields);
    return {
      id: record.id,
      ...record.fields
    };
  } catch (error) {
    console.error(`Error updating record in ${tableName}:`, error);
    throw error;
  }
}

// Delete a record from a table
export async function deleteRecord(tableName, recordId) {
  if (!base) {
    throw new Error('Airtable is not configured. Please check your API token.');
  }

  try {
    await base(tableName).destroy(recordId);
    return { success: true };
  } catch (error) {
    console.error(`Error deleting record from ${tableName}:`, error);
    throw error;
  }
}