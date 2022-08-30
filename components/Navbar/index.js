import React from "react";
import { Stack } from '@mui/material';
import Link from 'next/link'


export default function Navbar() {
    return (
        <Stack direction={"row"} spacing={10}>
            <Link href="/">Home</Link>
            <Link href="/guide">Roles Guide</Link>
            <Link href="/excel">Excel</Link>
        </Stack>
    )
}