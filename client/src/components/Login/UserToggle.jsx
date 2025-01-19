import React from "react";

import { Users, User } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

const UserToggle = ({ isAdmin, setIsAdmin }) => {
  return (
    <div className="flex justify-center mb-6">
      <Toggle
        pressed={isAdmin}
        onPressedChange={setIsAdmin}
        className="w-full max-w-[200px]"
      >
        {isAdmin ? (
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Admin Mode
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            User Mode
          </div>
        )}
      </Toggle>
    </div>
  );
};

export default UserToggle;
