import { Router } from "express";
import { createUser, getUsers, getUser, updateUser, delUser} from "../controlers/index.mjs"

const router = Router();

router.post("/api", createUser);
router.get("/api", getUsers);
router.get("/api/:id", getUser);
router.put("/api/:id", updateUser);
router.delete("/api/:id", delUser);

export { router }
export { getUsers }
export { getUser }
export { updateUser }
export { delUser }