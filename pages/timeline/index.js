import Link from 'next/link'
import AppLayout from "../../components/AppLayout";

export default function Timeline() {
    return (
        <AppLayout>
            <Link href="/">
                <a>
                    Volver a Home
                </a>
            </Link>
            <h1>
                HOla
            </h1>
        </AppLayout>
    )
}