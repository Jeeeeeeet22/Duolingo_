import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle
} from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";



export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white "></Menu>
            </SheetTrigger>
            <SheetContent className="p-0 x-[100] " side="left" >
                <SheetTitle>
                    <VisuallyHidden>Navigation Sidebar</VisuallyHidden>
                </SheetTitle>

                <Sidebar />
            </SheetContent>
        </Sheet>
    );
};