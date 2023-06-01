import clientPromise from "@/lib/connectMongo";

export default async function useDatabases() {
  const client = await clientPromise;
  const db = client.db("spellingLists");
  let databasesList = await db.admin().listDatabases();

  // console.log("Databases:");
  // console.log(databasesList);
  // return databasesList;

  /**
   * // if multiple databases exist:
   *  databasesList.databases.forEach(database => console.log(` - ${database.name}`));
   */
}
