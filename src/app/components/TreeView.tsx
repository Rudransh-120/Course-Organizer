"use client"

import { useState } from "react";
import { lectureData } from "@/data/lectures";
import Link from "next/link";

export default function Page() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedSubTopic, setSelectedSubTopic] = useState<string | null>(null);

  const classOptions = lectureData.map((cls) => cls.class);
  const subjectOptions = selectedClass
    ? lectureData.find((cls) => cls.class === selectedClass)?.subjects || []
    : [];

  const topicOptions = selectedSubject
    ? subjectOptions.find((subj) => subj.id === selectedSubject)?.topics || []
    : [];

  const subTopicOptions = selectedTopic
    ? topicOptions.find((topic) => topic.id === selectedTopic)?.subTopics || []
    : [];

  const lectures = selectedSubTopic
    ? subTopicOptions.find((sub) => sub.id === selectedSubTopic)?.lectures || []
    : [];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-white">Lecture Navigator</h1>
      <div className="space-y-4">
        {/* Class Dropdown */}
        <div>
          <label className="font-semibold">Select Class:</label>
          <select
            className="block mt-1 p-2 border rounded w-full bg-black"
            onChange={(e) => {
              setSelectedClass(e.target.value);
              setSelectedSubject(null);
              setSelectedTopic(null);
              setSelectedSubTopic(null);
            }}
            value={selectedClass || ""}
          >
            <option value="">-- Select Class --</option>
            {classOptions.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </div>

        {/* Subject Dropdown */}
        {selectedClass && (
          <div>
            <label className="font-semibold">Select Subject:</label>
            <select
              className="block mt-1 p-2 border rounded w-full bg-black"
              onChange={(e) => {
                setSelectedSubject(e.target.value);
                setSelectedTopic(null);
                setSelectedSubTopic(null);
              }}
              value={selectedSubject || ""}
            >
              <option value="">-- Select Subject --</option>
              {subjectOptions.map((subj) => (
                <option key={subj.id} value={subj.id}>
                  {subj.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Topic Dropdown */}
        {selectedSubject && (
          <div>
            <label className="font-semibold">Select Topic:</label>
            <select
              className="block mt-1 p-2 border rounded w-full bg-black"
              onChange={(e) => {
                setSelectedTopic(e.target.value);
                setSelectedSubTopic(null);
              }}
              value={selectedTopic || ""}
            >
              <option value="">-- Select Topic --</option>
              {topicOptions.map((topic) => (
                <option key={topic.id} value={topic.id}>
                  {topic.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Subtopic Dropdown */}
        {selectedTopic && (
          <div>
            <label className="font-semibold">Select SubTopic:</label>
            <select
              className="block mt-1 p-2 border rounded w-full bg-black"
              onChange={(e) => setSelectedSubTopic(e.target.value)}
              value={selectedSubTopic || ""}
            >
              <option value="">-- Select SubTopic --</option>
              {subTopicOptions.map((sub) => (
                <option key={sub.id} value={sub.id}>
                  {sub.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Lectures List */}
        {selectedSubTopic && lectures.length > 0 && (
          <div className="border rounded p-4 shadow bg-white">
            <h2 className="text-xl font-semibold mb-2">Lectures</h2>
            <ul className="list-disc pl-6 space-y-1">
              {lectures.map((lecture) => (
                <li className="text-blue-400" key={lecture.id}>
                  <Link href={`/lectures/${encodeURIComponent(lecture.id)}`}>
                    {lecture.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
