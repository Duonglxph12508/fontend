import axios from "axios";

const instane = axios.create({
    baseURL: "http://localhost:3001",
    headers:{
        "Content-Type" : "application/json"
    }
});

export default instane;
// kết nối với dn.json để lấy và thêm dữ liệu