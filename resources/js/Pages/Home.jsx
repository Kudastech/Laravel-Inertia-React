import { Head, Link, usePage } from "@inertiajs/react";
import {  useState } from "react";

export default function Home({ posts }) {
    const flash = usePage().props.flash
    const component = usePage()
    const [flashMsg, setFlashMsg] = useState(flash.message);
    setTimeout(() => {
        setFlashMsg(null);
    }, 2000);
    return (
        <>
            <Head title={ component } />
            <div className="font-bold text-4xl">
                <p>Hello {name}</p>
            </div>
            {flashMsg && (
                <div className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">
                    {flashMsg}
                </div>
            )}

            {flash.success && (
                <div className="absolute top-24 right-6 bg-green-500 p-2 rounded-md shadow-lg text-sm text-white">
                    {flash.success}
                </div>
            )}
            <div>
                {posts.data.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>Posted on:</span>

                            <span>
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                        </div>
                        <p className="font-medium"> {post.body}</p>
                        <Link href={`/posts/${post.id}`} className="text-link"> Read More ....</Link>
                    </div>
                ))}
                {/* Pagnation */}
                <div className="py-12 px-4">
                    {posts.links.map((link) =>
                        link.url ? (
                            <Link
                                key={link.label}
                                to={link.url}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className={`p-1 mx-1 ${
                                    link.active ? "text-blue-500 font-bold" : ""
                                }`}
                            />
                        ) : (
                            <span>
                                <span
                                    key={link.label}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                    className="p-1 mx-1 text-slate-300"
                                ></span>
                            </span>
                        )
                    )}
                </div>
            </div>
        </>
    );
}
