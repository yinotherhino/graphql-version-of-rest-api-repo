const mongoose = require('mongoose');
const MongoMemoryServer =  require('mongodb-memory-server').MongoMemoryServer;

describe('Single MongoMemoryServer', () => {
  let con;
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    con = await mongoose.connect(`${mongoServer.getUri()}test`, {});
  });

  afterAll(async () => {
    if (con) {
      await con.connection.close();
    }
    if (mongoServer) {
      await mongoServer.stop();
    }
  });

  it('should successfully set & get information from the database', async () => {
    // const db = mongoServer.getUri() + mongoServer.instanceInfo.dbName;

    expect(con).toBeDefined();
    const col = con.collection('test');
    const result = await col.insertMany([{ a: 1 }, { b: 1 }]);
    expect(result.insertedCount).toStrictEqual(2);
    expect(await col.countDocuments({})).toBe(2);
  });
});