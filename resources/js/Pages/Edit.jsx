import { useForm } from "@inertiajs/react"

export default function Edit({post}) {

    const { data, errors, put, setData, processing } = useForm({
        body: post.body
    });
    function submit(e) {
        e.preventDefault();
        put(`/posts/${post.id}`)
    }
    // console.log(errors)
    return (
        <>
            <h1 className="title">Update a new Post</h1>
            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea rows="10" value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body && '!ring-red-500'}

                    >  </textarea>

                    {errors.body && <p className="error">{errors.body} </p>}

                    <button type="submit" disabled={processing} className="primary-btn mt-4">Submit Post</button>
                </form>
            </div>
        </>
    )
}