"use client"; //create a boundary to act as a usual react component
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

type Props = {
    label: string;
    iconSrc: string;
    href: string;
};

export const SidebarItem = ({
    label, 
    iconSrc, 
    href 
}: Props) => {
    const pathname=usePathname();
    return (
        <Button asChild>
            <a href={href}>
                {label}
            </a>
        </Button>
    );
};
