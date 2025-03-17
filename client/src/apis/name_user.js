import { useEffect, useState } from "react";
import axios from "axios";

function Post() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get("/api/user", { withCredentials: true })
            .then(response => setUser(response.data))
            .catch(error => console.error("Error fetching user:", error));
    }, []);

    return (
        <p className="text-sm font-semibold text-gray-700">
            {user?.name || "Người dùng"}
        </p>
    );
}
