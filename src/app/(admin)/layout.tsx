export default function AdminLayout({children}: {children: React.ReactNode}) {
    return(
        <div className="w-screen h-screen">
            <div className="w-full h-[90px] border-b border-b-gray-500">
                admin header
            </div>
            {children}
        </div>
    )
}