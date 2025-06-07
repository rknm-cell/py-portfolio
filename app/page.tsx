import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Peter Yelton's Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Peter Yelton, this is my portfolio website showcasing my work and my writings as an artist in the tech world.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
