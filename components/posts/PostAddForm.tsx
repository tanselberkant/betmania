'use client';

import { addPost } from '@/lib/actions';
import { useRouter } from 'next/navigation';
import { useFormState } from 'react-dom';
// import styles from './PostAddForm.module.css';

// ReactQuill'i SSR olmadan dinamik olarak içe aktar
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

import { FormEvent, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const PostAddForm = () => {
  const router = useRouter();
  const [value, setValue] = useState('');

  const [state, formAction] = useFormState(addPost, undefined);

  // CATCHING THE STATE OF THE FORM
  useEffect(() => {
    if (state === 'Post added successfully') {
      router.push('/admin/dashboard');
    } else if (state === 'Something went wrong') {
      alert('something went wrong');
    }
  }, [state, router]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append('content', value); // Quill içeriğini form verilerine ekleyin

    // console.log('Form Data---->', formData);

    formAction(formData);
  };

  return (
    <>
      <form
        // action={formAction}
        onSubmit={handleSubmit}
        className="flex flex-col space-y-3 w-full border-2 border-black py-2"
      >
        <h1 className="text-2xl text-center my-2">Add New Post</h1>

        {/* META DESC */}
        <div className="flex gap-4 ">
          <label
            htmlFor="metaDescription"
            className="border-2 rounded-md w-[100px] flex justify-center items-center bg-black text-white"
          >
            Meta Desc
          </label>
          <input
            type="text"
            name="metaDescription"
            placeholder="Meta Description"
            className="w-full rounded-md px-2 py-2 border-2"
          />
        </div>
        {/* META Keyword */}
        <div className="flex gap-4 ">
          <label
            htmlFor="metaKeyword"
            className="border-2 rounded-md w-[100px] flex justify-center items-center bg-black text-white"
          >
            Meta keyword
          </label>
          <input
            type="text"
            name="metaKeyword"
            placeholder="Meta Keyword"
            className="w-full rounded-md px-2 py-2 border-2"
          />
        </div>
        {/* META Title */}
        <div className="flex gap-4 ">
          <label
            htmlFor="metaTitle"
            className="border-2 rounded-md w-[100px] flex justify-center items-center bg-black text-white"
          >
            Meta Title
          </label>
          <input
            type="text"
            name="metaTitle"
            placeholder="Meta Title"
            className="w-full rounded-md px-2 py-2 border-2"
          />
        </div>
        {/* Language */}
        <div className="flex gap-4 ">
          <label
            htmlFor="language"
            className="border-2 rounded-md w-[100px] flex justify-center items-center bg-black text-white"
          >
            Language
          </label>
          <select
            name="language"
            className="w-full rounded-md px-2 py-2 border-2"
          >
            <option value="tr">Seçiniz</option>
            <option value="tr">Türkce</option>
            <option value="en">Ingilizce</option>
          </select>
        </div>
        <hr className="border-2 border-black" />
        {/* POST TITLE */}
        <div className="flex gap-4">
          <label
            htmlFor="title"
            className="border-2 rounded-md w-[100px] flex justify-center items-center bg-black text-white"
          >
            Post Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Post Title"
            className="w-full rounded-md px-2 py-2 border-2"
          />
        </div>
        {/* POST SLUG */}
        <div className="flex gap-4 ">
          <label
            htmlFor="slug"
            className="border-2 rounded-md w-[100px] flex justify-center items-center bg-black text-white"
          >
            Post Slug
          </label>
          <input
            type="text"
            name="slug"
            placeholder="post-title"
            className="w-full rounded-md px-2 py-2 border-2"
          />
        </div>
        {/* POST DESCRIPTION */}
        <div className="flex gap-4 ">
          <label
            htmlFor="desc"
            className="border-2 rounded-md w-[100px] flex justify-center items-center bg-black text-white"
          >
            Post Desc.
          </label>
          <input
            type="text"
            name="desc"
            placeholder="Post Description"
            className="w-full rounded-md px-2 py-2 border-2"
          />
        </div>
        {/* POST imgUrl */}
        <div className="flex gap-4 ">
          <label
            htmlFor="imgUrl"
            className="border-2 rounded-md w-[100px] flex justify-center items-center bg-black text-white"
          >
            Post Image
          </label>
          <input
            type="text"
            name="imgUrl"
            placeholder="https://images.pexels.com/photo.jpeg"
            className="w-full rounded-md px-2 py-2 border-2"
          />
        </div>
        {/* POST authorName */}
        <div className="flex gap-4 ">
          <label
            htmlFor="authorName"
            className="border-2 rounded-md w-[100px] flex justify-center items-center bg-black text-white"
          >
            Author Name
          </label>
          <select
            name="authorName"
            className="w-full rounded-md px-2 py-2 border-2"
          >
            <option value="admin">Admin</option>
          </select>
        </div>
        {/* CONTENT */}
        <div className="flex gap-4">
          <label
            htmlFor="content"
            className="border-2 text-center rounded-md bg-black py-2 text-white  flex justify-center items-center"
          >
            CONTENT
          </label>
          <ReactQuill
            className="h-[400px] w-[80%] "
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
        {/* <textarea type="text" name="desc" placeholder="desc" rows={10} /> */}
        <div className="flex justify-end px-4 mt-6">
          <button className="rounded-md px-8 py-2 bg-black text-white border-black border-[1px]">
            Add
          </button>
        </div>
        {/* {state?.error} */}
      </form>
    </>
  );
};

export default PostAddForm;
