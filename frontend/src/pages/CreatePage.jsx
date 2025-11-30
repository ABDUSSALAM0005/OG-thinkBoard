import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import api from "../components/lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!title.trim() || !content.trim()) {
      toast.error("All fields are required")
      return;
    }
     setIsLoading(true);
try {
  await api.post("/notes", {
    title,
    content
  });
  toast.success("Note Created Successfully!");
  navigate("/");
} catch (error) {
  console.log("Error creating note", error);

  if (error.response && error.response.status === 429) {
    toast.error("Slow down! You're creating notes too fast", {
      duration: 4000,
      icon: "💀",
    });
  } else {
    toast.error("Failed to create note");
  }
} finally {
  setIsLoading(false);
}

  };


    
  
  return (
    <div className="xl:max-w-[40%] md:max-w-[55%]  mx-auto bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label htmlFor="title" className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Note Title"
                    className="input input-bordered"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-control mb-4">
                  <label htmlFor="content" className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea
                    type="text"
                    id="content"
                    placeholder="Write Your note here..."
                    className="input input-bordered h-32"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn bg-[#00FF9D]/60 hover:bg-[#00FF9D]/90 text-white"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
