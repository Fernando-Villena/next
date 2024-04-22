import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Title',
    keywords:['About Page']
};


export default function AboutPage( ){

    return(
        <main>
        <span className="text-7xl">About Page</span>
        </main>
    )
}