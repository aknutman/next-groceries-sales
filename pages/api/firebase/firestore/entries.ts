import db from "../../../../utils/db";

interface ResType {
  status: (arg0: number) => {
    (): any;
    new (): any;
    json: { (arg0: { entriesData: { Id: string }[] }): void; new (): any };
    end: { (): void; new (): any };
  };
}

export default async function ApiEntries(req: any, res: ResType) {
  try {
    const collectionParam = String(req.url)
      .split("?")[1]
      .split("collection")[1]
      .replace("=", "");

    const entries = await db.collection(collectionParam).get();

    const entriesData = entries.docs.map((entry) => ({
      Id: entry.id,
      ...entry.data(),
    }));

    res.status(200).json({ entriesData });
  } catch (e) {
    res.status(400).end();
  }
}
