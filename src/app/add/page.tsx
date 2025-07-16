"use client";

enum ClassType  {"Class 7", "Class 8", "Class 9", "Class 10"}
enum SubjectType {"Maths", "Physics", "Chemistry"}

type schemaType = {
  class: ClassType,
  subject: SubjectType,
  topic: string,
  subTopic: string,
  
}








import { useState, useEffect } from "react";

export default function AddContentPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [clsId, setClsId] = useState("");
  const [subjId, setSubjId] = useState("");
  const [topicId, setTopicId] = useState("");
  const [subTopicId, setSubTopicId] = useState("");

  const [title, setTitle] = useState("");
  const [fullVideo, setFullVideo] = useState("");
  const [chunks, setChunks] = useState([""]);
  const [summaryLink, setSummaryLink] = useState("");
  const [homeworkLink, setHomeworkLink] = useState("");
  const [answerKey, setAnswerKey] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("/data/classes.json")
      .then((res) => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);

    const payload = {
      classId: clsId,
      subjectId: subjId,
      topicId,
      subTopicId,
      heading: {
        title,
        fullVideo,
        videoChunks: chunks.filter((c) => c.trim() !== "")
      },
      summaryLink,
      homeworkLink,
      answerKey
    };

    const res = await fetch("/api/add-heading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      setSubmitted(true);
      setTitle("");
      setFullVideo("");
      setChunks([""]);
      setSummaryLink("");
      setHomeworkLink("");
      setAnswerKey("");
    }
  };

  const getClass = () => data.find((c) => c.id === clsId);
  const getSubject = () => getClass()?.subjects.find((s: any) => s.id === subjId);
  const getTopic = () => getSubject()?.topics.find((t: any) => t.id === topicId);
  const getSubTopics = () => getTopic()?.subTopics ?? [];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">➕ Add New Video Heading</h1>

      {loading ? (
        <p>Loading class structure...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Dropdowns */}
          <select value={clsId} onChange={(e) => setClsId(e.target.value)} required className="w-full border p-2 rounded">
            <option value="">Select Class</option>
            {data.map((c: any) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>

          {clsId && (
            <select value={subjId} onChange={(e) => setSubjId(e.target.value)} required className="w-full border p-2 rounded">
              <option value="">Select Subject</option>
              {getClass()?.subjects.map((s: any) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          )}

          {subjId && (
            <select value={topicId} onChange={(e) => setTopicId(e.target.value)} required className="w-full border p-2 rounded">
              <option value="">Select Topic</option>
              {getSubject()?.topics.map((t: any) => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          )}

          {topicId && (
            <select value={subTopicId} onChange={(e) => setSubTopicId(e.target.value)} required className="w-full border p-2 rounded">
              <option value="">Select SubTopic</option>
              {getSubTopics().map((st: any) => (
                <option key={st.id} value={st.id}>{st.name}</option>
              ))}
            </select>
          )}

          {/* Heading Info */}
          <input
            type="text"
            required
            placeholder="Heading Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <input
            type="url"
            required
            placeholder="Full Video Link"
            value={fullVideo}
            onChange={(e) => setFullVideo(e.target.value)}
            className="w-full border p-2 rounded"
          />

          {/* Chunks */}
          <div>
            <label className="block font-medium">Video Chunks:</label>
            {chunks.map((chunk, idx) => (
              <input
                key={idx}
                type="url"
                value={chunk}
                onChange={(e) => {
                  const newChunks = [...chunks];
                  newChunks[idx] = e.target.value;
                  setChunks(newChunks);
                }}
                className="w-full border p-2 mb-1 rounded"
                placeholder={`Chunk ${idx + 1}`}
              />
            ))}
            <button
              type="button"
              onClick={() => setChunks([...chunks, ""])}
              className="text-blue-600 text-sm underline"
            >
              + Add chunk
            </button>
          </div>

          {/* Links at SubTopic level */}
          <input
            type="url"
            placeholder="Class Summary Link"
            value={summaryLink}
            onChange={(e) => setSummaryLink(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <input
            type="url"
            placeholder="Homework Link"
            value={homeworkLink}
            onChange={(e) => setHomeworkLink(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <input
            type="url"
            placeholder="Answer Key Link"
            value={answerKey}
            onChange={(e) => setAnswerKey(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            💾 Save
          </button>
        </form>
      )}

      {submitted && (
        <div className="mt-4 p-4 bg-green-100 rounded border border-green-400">
          ✅ Successfully added video heading to SubTopic!
        </div>
      )}
    </div>
  );
}
