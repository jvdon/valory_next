"use server"

import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("valory");
    switch (req.method) {
        case "POST":
            let bodyObject = JSON.parse(req.body);
            let myPost = await db.collection("clientes").insertOne(bodyObject);
            res.json(myPost.ops[0]);
            break;
        case "GET":
            const allPosts = await db.collection("clientes").find({}).toArray();
            res.json({ status: 200, data: allPosts });
            break;
    }
}