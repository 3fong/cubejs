cube(`Person`, {
  sql: `SELECT * FROM test12.person`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    ts: {
      sql: `ts`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
