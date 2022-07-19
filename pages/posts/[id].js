export default function Post() {
    return (
        <div>single post</div>
    )
}

export async function getStaticPaths() {
    // return list of possible value for id
}

export async function getStaticProps({params}) {
    // fetch data from somewhere using params.id
}