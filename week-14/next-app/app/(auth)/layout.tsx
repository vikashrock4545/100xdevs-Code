import React from "react";

export default function TopBar({children}: {
    children: React.ReactNode
}) {
    return ( 
    <div>
        <div className="text-center border-b p-2">
            Login now to get 20% off!
        </div>
        {children}
    </div>
    );
}