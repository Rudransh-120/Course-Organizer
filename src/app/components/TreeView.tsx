"use client"
import React, { useState } from 'react';

type TreeNode = {
  id: string;
  name: string;
  url?: string;
  children?: TreeNode[];
};

const treeData: TreeNode[] = [
  {
    id: 'class7',
    name: 'Class 7',
    children: [
      {
        id: 'math',
        name: 'Math',
        children: [
          {
            id: 'Pre-algebra',
            name: 'Pre-Algebra',
            children: [
              {
                id: 'lecture1',
                name: 'Lecture 1',
                children: [
                  {
                    id: 'video1',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video1_content',
                        name: 'Watch Full Video',
                        url: 'https://youtu.be/b7iAwrJEuxY',
                      },
                    ],
                  },
                  {
                    id: 'topics1',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic1_1',
                        name: '0:00 - Question 1: Fractions',
                        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=0s',
                      },
                      {
                        id: 'topic1_2',
                        name: '6:33 - Question 2: Fractions',
                        url: 'https://www.youtube.com/watch?v=b7iAwrJEuxY&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=2&t=393s',
                      },
                      {
                        id: 'topic1_3',
                        name: '20:58 - Question 3: Fractions',
                        url: 'https://www.youtube.com/watch?v=b7iAwrJEuxY&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=2&t=1258s',
                      },
                      {
                        id: 'topic1_4',
                        name: '31:33 - Question 4: Mixed Fractions',
                        url: 'https://www.youtube.com/watch?v=b7iAwrJEuxY&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=2&t=1893s',
                      },
                      {
                        id: 'topic1_5',
                        name: '45:02 - Question 5: Mixed Fractions and Decimals',
                        url: 'https://www.youtube.com/watch?v=b7iAwrJEuxY&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=2&t=2702s',
                      },
                      {
                        id: 'topic1_6',
                        name: '56:29: - Question 6: Mixed Fractions and Decimals Last Question',
                        url: 'https://www.youtube.com/watch?v=b7iAwrJEuxY&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=2&t=3389s',
                      },
                    ],
                  },
                  {
                    id: 'summary1',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary1_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1SLZCTswY7iO6WzANjgViyHTQG1teA08dpwM7AucwZKk/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework1',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework1_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1AFo1b6NbFwlYrjlztV51kgpUa-26wVy0YrD16EFkWCM/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture2',
                name: 'Lecture 2',
                children: [
                  {
                    id: 'video2',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video2_content',
                        name: 'Watch Full Video',
                        url: 'https://youtu.be/wXbgkokBvZc?si=bzJTOYOjs2_OYJUa',
                      },
                    ],
                  },
                  {
                    id: 'topics2',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic2_1',
                        name: '0:00 - Homework Discussion',
                        url: 'https://www.youtube.com/watch?v=wXbgkokBvZc&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=3',
                      },
                      {
                        id: 'topic2_2',
                        name: '14:33 - Decimals, Fractions and Brackets',
                        url: 'https://www.youtube.com/watch?v=wXbgkokBvZc&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=3&t=873s',
                      },
                      {
                        id: 'topic2_3',
                        name: '24:21 - Practice Question 2',
                        url: 'https://www.youtube.com/watch?v=wXbgkokBvZc&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=3&t=1461s',
                      },
                      {
                        id: 'topic2_4',
                        name: '29:17 - Practice Question 3',
                        url: 'https://www.youtube.com/watch?v=wXbgkokBvZc&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=3&t=1757s',
                      },
                    ],
                  },
                  {
                    id: 'summary2',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary2_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1eCz-HewcgY62rrEa0oPCeoT14hSuQ9UaLk-4AhXhDZk/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework2',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework2_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1LR5ibn5CURPvpvc5Pkr6XuZpj42e_oqDKfpHa8XSV90/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture3',
                name: 'Lecture 3',
                children: [
                  {
                    id: 'video3',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video3_content',
                        name: 'Watch Full Video',
                        url: 'https://youtu.be/YvxiPVl4Zow?si=exezsCgdvaeRjJjD',
                      },
                    ],
                  },
                  {
                    id: 'topics3',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic3_1',
                        name: '0:00 - Homework Discussion',
                        url: 'https://youtu.be/YvxiPVl4Zow?si=exezsCgdvaeRjJjD',
                      },
                      {
                        id: 'topic3_2',
                        name: '14:23 - Practice Question 1',
                        url: 'https://www.youtube.com/watch?v=YvxiPVl4Zow&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=4&t=863s',
                      },
                      {
                        id: 'topic3_3',
                        name: '26:05 - Practice Question 2',
                        url: 'https://www.youtube.com/watch?v=YvxiPVl4Zow&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=4&t=1565s',
                      },
                      {
                        id: 'topic3_4',
                        name: '34:32 - Practice Question 3',
                        url: 'https://www.youtube.com/watch?v=YvxiPVl4Zow&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=4&t=2072s',
                      },
                      {
                        id: 'topic3_5',
                        name: '46:03 - Practice Question 4',
                        url: 'https://www.youtube.com/watch?v=YvxiPVl4Zow&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=4&t=2763s',
                      },
                    ],
                  },
                  {
                    id: 'summary3',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary3_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1aE5EFTL2blOes6cv-yum56AK0NWaupU-eg2kjNYk5n8/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework3',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework3_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1EvbeuM_dnSSxPyAv7Z8KeskeE9jrzJiDqWghcDWz4dI/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 'algebra',
            name: 'Algebra',
            children: [
              {
                id: 'lecture1',
                name: 'Lecture 1',
                children: [
                  {
                    id: 'video1',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video1_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob',
                      },
                    ],
                  },
                  {
                    id: 'topics1',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic1_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2',
                      },
                      {
                        id: 'topic1_2',
                        name: '3:43 - Question 2',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2&t=223s',
                      },
                      {
                        id: 'topic1_3',
                        name: '8:33 - Question 3',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2&t=513s',
                      },
                      {
                        id: 'topic1_4',
                        name: '14:16 - Question 4',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2&t=856s',
                      },
                      {
                        id: 'topic1_5',
                        name: '19:14 - Question 5',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2&t=1154s',
                      },
                      {
                        id: 'topic1_6',
                        name: '26:59: - Question 6',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2&t=1619s',
                      },
                      {
                        id: 'topic1_7',
                        name: '36:00: - Question 7',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2&t=2160s',
                      },
                      {
                        id: 'topic1_8',
                        name: '44:11: - Question 8',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2&t=2651s',
                      },
                      {
                        id: 'topic1_9',
                        name: '53:10: - Question 9',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2&t=3190s',
                      },
                      {
                        id: 'topic1_10',
                        name: '01:01:42: - Question 10',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2&t=3702s',
                      },
                    ],
                  },
                  {
                    id: 'summary1',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary1_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1z6miQXXpWwYzhkD7noFFVQwxw8EaMdgPqLksXOPVP4o/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework1',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework1_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1fjoXx0Jp3js1LS79amNsOXRcQZ7qoyHFDCLrZo1jsmA/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture2',
                name: 'Lecture 2',
                children: [
                  {
                    id: 'video2',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video2_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=3ci9EThrg7Y&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2',
                      },
                    ],
                  },
                  {
                    id: 'topics2',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic2_1',
                        name: '0:00 - Homework Discussion',
                        url: 'https://www.youtube.com/watch?v=3ci9EThrg7Y&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=3',
                      },
                      {
                        id: 'topic2_2',
                        name: '8:43 - Question 1',
                        url: 'https://www.youtube.com/watch?v=3ci9EThrg7Y&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=3&t=523s',
                      },
                      {
                        id: 'topic2_3',
                        name: '19:55 - Question 2',
                        url: 'https://www.youtube.com/watch?v=3ci9EThrg7Y&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=3&t=1195s',
                      },
                      {
                        id: 'topic2_4',
                        name: '31:46 - Question 3',
                        url: 'https://www.youtube.com/watch?v=3ci9EThrg7Y&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=3&t=1906s',
                      },
                      {
                        id: 'topic2_5',
                        name: '50:10 - Question 4',
                        url: 'https://www.youtube.com/watch?v=3ci9EThrg7Y&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=3&t=3010s',
                      },
                      {
                        id: 'topic2_6',
                        name: '01:02:27 - Question 5',
                        url: 'https://www.youtube.com/watch?v=3ci9EThrg7Y&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=3&t=3747s',
                      },
                    ],
                  },
                  {
                    id: 'summary2',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary2_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1BTr-Yra740fUJQzgBFaayPJqEzXZUUKKJYwKZwVsiZ8/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework2',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework2_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1Hm_zoyN-unEnthg2vc5qBVsrdeKqorMtGZw3C3guDaE/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture3',
                name: 'Lecture 3',
                children: [
                  {
                    id: 'video3',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video3_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=lnBXmn4DfQ8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=3',
                      },
                    ],
                  },
                  {
                    id: 'topics3',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic3_1',
                        name: '0:00 - Homework Discussion',
                        url: 'https://www.youtube.com/watch?v=lnBXmn4DfQ8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=4',
                      },
                      {
                        id: 'topic3_2',
                        name: '11:06 - Doubt1 Discussion',
                        url: 'https://www.youtube.com/watch?v=lnBXmn4DfQ8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=4&t=666s',
                      },
                      {
                        id: 'topic3_3',
                        name: '16:48 - Doubt2 Discussion',
                        url: 'https://www.youtube.com/watch?v=lnBXmn4DfQ8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=4&t=1008s',
                      },
                      {
                        id: 'topic3_4',
                        name: '19:53 - Doubt3 Discussion',
                        url: 'https://www.youtube.com/watch?v=lnBXmn4DfQ8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=4&t=1193s',
                      },
                      {
                        id: 'topic3_5',
                        name: '23:07 - Question 1',
                        url: 'https://www.youtube.com/watch?v=lnBXmn4DfQ8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=4&t=1387s',
                      },
                      {
                        id: 'topic3_6',
                        name: '37:16 - Practice Questions',
                        url: 'https://www.youtube.com/watch?v=lnBXmn4DfQ8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=4&t=2236s',
                      },
                      {
                        id: 'topic3_7',
                        name: '48:12 - Question 2 (Solved)',
                        url: 'https://www.youtube.com/watch?v=lnBXmn4DfQ8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=4&t=2892s',
                      },
                      {
                        id: 'topic3_8',
                        name: '54:59 - Question 3',
                        url: 'https://www.youtube.com/watch?v=lnBXmn4DfQ8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=4&t=3299s',
                      },
                    ],
                  },
                  {
                    id: 'summary3',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary3_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1EfG7_2lNwQgc8rcgKDSFLsjdrsC4q5apX_Piipnl_Wc/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework3',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework3_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1_btKDY6PpRoRkuWrLPc5osckJXKoDrfCEX6UM5FZD9E/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
             {
                id: 'lecture',
                name: 'Lecture 4',
                children: [
                  {
                    id: 'video4',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video4_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=2sYu2XH5O5E&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=4',
                      },
                    ],
                  },
                  {
                    id: 'topics4',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic4_1',
                        name: '0:00 - HW Discussion',
                        url: 'https://www.youtube.com/watch?v=2sYu2XH5O5E&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=5',
                      },
                      {
                        id: 'topic4_2',
                        name: '8:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=2sYu2XH5O5E&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=5&t=480s',
                      },
                      {
                        id: 'topic4_3',
                        name: '12:21 - Question 2',
                        url: 'https://www.youtube.com/watch?v=2sYu2XH5O5E&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=5&t=741s',
                      },
                      {
                        id: 'topic4_4',
                        name: '15:02 - Question 3',
                        url: 'https://www.youtube.com/watch?v=2sYu2XH5O5E&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=5&t=902s',
                      },
                      {
                        id: 'topic4_5',
                        name: '18:36 - Question 4',
                        url: 'https://www.youtube.com/watch?v=2sYu2XH5O5E&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=5&t=1116s',
                      },
                      {
                        id: 'topic4_6',
                        name: '29:37 - Intro to new method',
                        url: 'https://www.youtube.com/watch?v=2sYu2XH5O5E&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=5&t=1777s',
                      },
                      {
                        id: 'topic4_7',
                        name: '40:04 - Question 5',
                        url: 'https://www.youtube.com/watch?v=2sYu2XH5O5E&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=5&t=2404s',
                      },
                      {
                        id: 'topic4_8',
                        name: '50:13 - Question 6',
                        url: 'https://www.youtube.com/watch?v=2sYu2XH5O5E&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=5&t=3013s',
                      },
                    ],
                  },
                  {
                    id: 'summary4',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary4_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/19OO0EWFlMPtc60AFZSb51dtS2svcXiILuWD4vQxzpao/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework4',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework4_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/10sMivWdUPA9YnwcPBP2SA7neX9VvsbTLk9ONcqPk5sA/edit?tab=t.0#heading=h.4xkc7ck2m788',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 5',
                children: [
                  {
                    id: 'video5',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video5_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=5',
                      },
                    ],
                  },
                  {
                    id: 'topics5',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic5_1',
                        name: '0:00 - Homework Discussion',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6',
                      },
                      {
                        id: 'topic5_2',
                        name: '6:06 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6&t=366s',
                      },
                      {
                        id: 'topic5_3',
                        name: '8:04 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6&t=484s',
                      },
                      {
                        id: 'topic5_4',
                        name: '12:26 - Distributive property concept',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6&t=746s',
                      },
                      {
                        id: 'topic5_5',
                        name: '22:01 - Pratice Question 1',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6&t=1321s',
                      },
                      {
                        id: 'topic5_6',
                        name: '26:53 - Pratice Question 2',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6&t=1613s',
                      },
                      {
                        id: 'topic5_7',
                        name: '35:14 - Pratice Question 3',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6&t=2114s',
                      },
                      {
                        id: 'topic5_8',
                        name: '38:39 - Pratice Question 4',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6&t=2319s',
                      },
                      {
                        id: 'topic5_',
                        name: '47:29 - Pratice Question 5',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6&t=2849s',
                      }
                    ],
                  },
                  {
                    id: 'summary5',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary5_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/14FRSRpxoy_0tSyTeAxRcXNY-fV7EROpkCOb_f7BoZOc/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework5',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework5_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1Ht7g5TfwtvU6-4xXAyb98UCHRTw6IRN7bx16_wfAwAc/edit?tab=t.0#heading=h.h363mkvwo5p8',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 6',
                children: [
                  {
                    id: 'video6',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video6_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6',
                      },
                    ],
                  },
                  {
                    id: 'topics6',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic6_1',
                        name: '0:00 - Homework Discussion',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7',
                      },
                      {
                        id: 'topic6_2',
                        name: '5:51 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=351s',
                      },
                      {
                        id: 'topic6_3',
                        name: '7:06 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=426s',
                      },
                      {
                        id: 'topic6_4',
                        name: '9:28 - Question 1',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=568s',
                      },
                      {
                        id: 'topic6_5',
                        name: '16:39 - Question 2',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=999s',
                      },
                      {
                        id: 'topic6_6',
                        name: '21:26 - Question 3',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=1286s',
                      },
                      {
                        id: 'topic6_7',
                        name: '27:25 - Question 4',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=1645s',
                      },
                      {
                        id: 'topic6_8',
                        name: '31:11 - Question 5',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=1871s',
                      },
                      {
                        id: 'topic6_9',
                        name: '36:12 - Question 6',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=2172s',
                      },
                      {
                        id: 'topic6_10',
                        name: '47:46 - Student Doubt',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=2866s',
                      },
                      {
                        id: 'topic6_11',
                        name: '48:58 - Question 7',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=2938s',
                      },
                      {
                        id: 'topic6_12',
                        name: '1:05:02 - Question 8',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=3902s',
                      }
                    ],
                  },
                  {
                    id: 'summary6',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary6_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1My9mz9pbWWpnDjvxNruVijUsAuDmxa71KK88HlkmxZ8/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework6',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework6_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1g5PIAWeYCkGfBGMHKyIYpMGfzxp34syvxg50w8Eiqhk/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 7',
                children: [
                  {
                    id: 'video7',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video7_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=1oxgqd-r2ak&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7',
                      },
                    ],
                  },
                  {
                    id: 'topics7',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic7_1',
                        name: '0:00 - Homework Discussion',
                        url: 'https://www.youtube.com/watch?v=1oxgqd-r2ak&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=8',
                      },
                      {
                        id: 'topic7_2',
                        name: '6:49 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=1oxgqd-r2ak&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=8&t=409s',
                      },
                      {
                        id: 'topic7_3',
                        name: '11:22 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=1oxgqd-r2ak&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=8&t=682s',
                      },
                      {
                        id: 'topic7_4',
                        name: '15:04 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=1oxgqd-r2ak&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=8&t=904s',
                      },
                      {
                        id: 'topic7_5',
                        name: '23:22 - Question 1',
                        url: 'https://www.youtube.com/watch?v=1oxgqd-r2ak&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=8&t=1402s',
                      },
                      {
                        id: 'topic7_6',
                        name: '48:14 - Brackets Intro and Question 2',
                        url: 'https://www.youtube.com/watch?v=1oxgqd-r2ak&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=8&t=2894s',
                      },
                      {
                        id: 'topic7_7',
                        name: '1:10:19 - Question 3',
                        url: 'https://www.youtube.com/watch?v=1oxgqd-r2ak&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=8&t=4219s',
                      }
                    ],
                  },
                  {
                    id: 'summary7',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary7_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1Z68h7XijjEfPejzII7MSdT8tWTzAs9LR4S3j1fsCTvA/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework7',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework7_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1lqRdPzZVZrENGOsaXIF97p8JBDoakwJJHe6qUrSZj2s/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 8',
                children: [
                  {
                    id: 'video8',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video8_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=QUj8tDYy_mo&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=8',
                      },
                    ],
                  },
                  {
                    id: 'topics8',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic8_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=QUj8tDYy_mo&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=9',
                      },
                      {
                        id: 'topic8_2',
                        name: '6:27 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=QUj8tDYy_mo&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=9&t=387s',
                      },
                      {
                        id: 'topic8_3',
                        name: '14:45 - Question 1',
                        url: 'https://www.youtube.com/watch?v=QUj8tDYy_mo&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=9&t=885s',
                      },
                      {
                        id: 'topic8_4',
                        name: '43:15 - Question 2',
                        url: 'https://www.youtube.com/watch?v=QUj8tDYy_mo&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=9&t=2595s',
                      },
                      {
                        id: 'topic8_5',
                        name: '53:47 - Brackets and Solution',
                        url: 'https://www.youtube.com/watch?v=QUj8tDYy_mo&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=9&t=3227s',
                      },
                      {
                        id: 'topic8_6',
                        name: '1:01:00 - Question 3',
                        url: 'https://www.youtube.com/watch?v=QUj8tDYy_mo&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=9&t=3660s',
                      }
                    ],
                  },
                  {
                    id: 'summary8',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary8_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1LbgTXP2onyZXLP3nPV34PS9EbwPpXyPvot22YeI2nZY/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework8',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework8_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1QGgz7YirFDfjsI9iwSLOXHFIU_mqCiXSmpI5ZnAII3c/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 9',
                children: [
                  {
                    id: 'video9',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video9_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=OJiqhjZ1IiM&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=9',
                      },
                    ],
                  },
                  {
                    id: 'topics9',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic9_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=OJiqhjZ1IiM&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=10',
                      },
                      {
                        id: 'topic9_2',
                        name: '5:36 - Question 1',
                        url: 'https://www.youtube.com/watch?v=OJiqhjZ1IiM&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=10&t=336s',
                      },
                      {
                        id: 'topic9_3',
                        name: '19:25 - Question 2',
                        url: 'https://www.youtube.com/watch?v=OJiqhjZ1IiM&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=10&t=1165s',
                      },
                      {
                        id: 'topic9_4',
                        name: '35:36 - Question 3',
                        url: 'https://www.youtube.com/watch?v=OJiqhjZ1IiM&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=10&t=2136s',
                      },
                      {
                        id: 'topic9_5',
                        name: '54:03 - Sol. Question 1',
                        url: 'https://www.youtube.com/watch?v=OJiqhjZ1IiM&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=10&t=3243s',
                      },
                      {
                        id: 'topic9_6',
                        name: '58:31 - Question 4',
                        url: 'https://www.youtube.com/watch?v=OJiqhjZ1IiM&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=10&t=3511s',
                      }
                    ],
                  },
                  {
                    id: 'summary9',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary9_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1EHqP67mh04jKB-PbD2ExBbl3nwnNUgpkUrMR92E0SxQ/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework9',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework9_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1AU87288s9FhQx3HhtLjpH_0ocvOMVmC_iHDQ6Y3sHFw/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 10',
                children: [
                  {
                    id: 'video10',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video10_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=CLIP-UxJT5c&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=10',
                      },
                    ],
                  },
                  {
                    id: 'topics10',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic10_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=CLIP-UxJT5c&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=11',
                      },
                      {
                        id: 'topic10_2',
                        name: '6:18 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=CLIP-UxJT5c&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=11&t=378s',
                      },
                      {
                        id: 'topic10_3',
                        name: '11:58 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=CLIP-UxJT5c&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=11&t=718s',
                      },
                      {
                        id: 'topic10_4',
                        name: '16:29 - Intro to word problems',
                        url: 'https://www.youtube.com/watch?v=CLIP-UxJT5c&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=11&t=989s',
                      },
                      {
                        id: 'topic10_5',
                        name: '34:39 - Question 1',
                        url: 'https://www.youtube.com/watch?v=CLIP-UxJT5c&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=11&t=2079s',
                      },
                      {
                        id: 'topic10_6',
                        name: '40:50 - Question 2',
                        url: 'https://www.youtube.com/watch?v=CLIP-UxJT5c&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=11&t=2450s',
                      }
                    ],
                  },
                  {
                    id: 'summary10',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary10_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/15SRsnLb3MkXOW-yFRwzOkQZ9YIFLmfteeo3KZsVdsvY/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework10',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework10_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1eYeIPZRH1ZF5AEe-jjrAZ5jV7Jg1ilYkmu9hc6qXnfc/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'quiz1',
                    name: 'Quiz',
                    children: [
                      {
                        id: 'quiz1_content',
                        name: 'View Quiz Document',
                        url: 'https://docs.google.com/document/d/1NlQWh1qvbmyFYuvlawT3duKW5hdniQHpOrKDLsDe3FM/edit?tab=t.0',
                      },
                    ],
                  }
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 11',
                children: [
                  {
                    id: 'video11',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video11_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=11',
                      },
                    ],
                  },
                  {
                    id: 'topics11',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic11_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12',
                      },
                      {
                        id: 'topic11_2',
                        name: '6:18 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=378s',
                      },
                      {
                        id: 'topic11_3',
                        name: '12:56 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=776s',
                      },
                      {
                        id: 'topic11_4',
                        name: '17:03 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=1023s',
                      },
                      {
                        id: 'topic11_5',
                        name: '22:34 - Quiz Answer Key',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=1354s',
                      },
                      {
                        id: 'topic11_6',
                        name: '25:40 - Quiz Doubt 1',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=1540s',
                      },
                      {
                        id: 'topic11_7',
                        name: '29:28 - Quiz Doubt 2',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=1768s',
                      },
                      {
                        id: 'topic11_8',
                        name: '33:37 - Quiz Doubt 3',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=2017s',
                      },
                      {
                        id: 'topic11_9',
                        name: '40:28 - Quiz Doubt 4',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=2428s',
                      },
                      {
                        id: 'topic11_10',
                        name: '53:31 - Quiz Doubt 5',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=3211s',
                      },
                      {
                        id: 'topic11_11',
                        name: '1:06:23 - Quiz Doubt 6',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=3983s',
                      }
                    ],
                  },
                  {
                    id: 'summary11',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary11_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1qX0YA3UT__gd-9psNXacXrMDGRfE3drAJpzJLgcfClY/edit?tab=t.0#heading=h.cotx6y4uwyrt',
                      },
                    ],
                  },
                  {
                    id: 'homework11',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework11_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1mgWtNHlLcI294QYnLO39Lp55hYCGmM0uqe6M7YHXR0k/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 12',
                children: [
                  {
                    id: 'video12',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video12_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=wCqRtAR8nbg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12',
                      },
                    ],
                  },
                  {
                    id: 'topics12',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic12_1',
                        name: '0:00 - Homework Check',
                        url: 'https://www.youtube.com/watch?v=wCqRtAR8nbg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=13',
                      },
                      {
                        id: 'topic12_2',
                        name: '6:43 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=wCqRtAR8nbg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=13&t=403s',
                      },
                      {
                        id: 'topic12_3',
                        name: '17:51 - Question 1',
                        url: 'https://www.youtube.com/watch?v=wCqRtAR8nbg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=13&t=1071s',
                      },
                      {
                        id: 'topic12_4',
                        name: '35:43 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=wCqRtAR8nbg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=13&t=2143s',
                      },
                      {
                        id: 'topic12_5',
                        name: '58:47 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=wCqRtAR8nbg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=13&t=3527s',
                      },
                      {
                        id: 'topic12_6',
                        name: '1:03:52 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=wCqRtAR8nbg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=13&t=3832s',
                      }
                    ],
                  },
                  {
                    id: 'summary12',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary12_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1iqepf0Uz1vCcwvAKpazl_3R-l5gCtW3EV-b3YoM84U4/edit?tab=t.0#heading=h.snmvdme7gqii',
                      },
                    ],
                  },
                  {
                    id: 'homework12',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework12_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1hn2H6a0ZD4HdfttUJxvWfyDPbfT8fR8vQS0TG425_Wo/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 13',
                children: [
                  {
                    id: 'video13',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video13_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=13',
                      },
                    ],
                  },
                  {
                    id: 'topics13',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic13_1',
                        name: '0:00 - Homework Check',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14',
                      },
                      {
                        id: 'topic13_2',
                        name: '6:57 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14&t=417s',
                      },
                      {
                        id: 'topic13_3',
                        name: '13:40 - Question 1',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14&t=820s',
                      },
                      {
                        id: 'topic13_4',
                        name: '28:36 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14&t=1716s',
                      },
                      {
                        id: 'topic13_5',
                        name: '40:57 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14&t=2457s',
                      },
                      {
                        id: 'topic13_6',
                        name: '55:27 - Recap Question',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14&t=3327s',
                      },
                      {
                        id: 'topic13_7',
                        name: '1:03:26 - Recap Question 2',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14&t=3806s',
                      },
                      {
                        id: 'topic13_8',
                        name: '1:11:28 - Concept',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14&t=4288s',
                      },
                      {
                        id: 'topic13_9',
                        name: '1:12:30 - Question 2',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14&t=4350s',
                      },
                      {
                        id: 'topic13_10',
                        name: '1:20:33 - Question 3',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14&t=4833s',
                      }
                    ],
                  },
                  {
                    id: 'summary13',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary13_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1jIbx_dnzxpHmkYKyOdIyuHhUZGoQp0UV2cpP5NWYJZ0/edit?tab=t.0#heading=h.yjl8dwi2oey2',
                      },
                    ],
                  },
                  {
                    id: 'homework13',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework13_content',
                        name: 'No Homework was assigned',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 14',
                children: [
                  {
                    id: 'video14',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video14_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14',
                      },
                    ],
                  },
                  {
                    id: 'topics14',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic14_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15',
                      },
                      {
                        id: 'topic14_2',
                        name: '13:40 - Question 2',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15&t=820s',
                      },
                      {
                        id: 'topic14_3',
                        name: '19:40 - Question 3',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15&t=1180s',
                      },
                      {
                        id: 'topic14_4',
                        name: '28:14 - Question 4',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15&t=1694s',
                      },
                      {
                        id: 'topic14_5',
                        name: '36:51 - Question 5',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15&t=2211s',
                      },
                      {
                        id: 'topic14_6',
                        name: '47:10 - Question 6',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15&t=2830s',
                      },
                      {
                        id: 'topic14_7',
                        name: '53:21 - Question 7',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15&t=3201s',
                      },
                      {
                        id: 'topic14_8',
                        name: '56:23 - Question 8',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15&t=3383s',
                      },
                      {
                        id: 'topic14_9',
                        name: '1:01:44 - Question 9',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15&t=3704s',
                      },
                      {
                        id: 'topic14_10',
                        name: '1:07:58 - Question 10',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15&t=4078s',
                      }
                    ],
                  },
                  {
                    id: 'summary14',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary14_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1oFQLH40rDthSKrGXfWLrMDdarehU3cFIsT1U5aC09oc/edit?tab=t.0#heading=h.nqvvcntmipli',
                      },
                    ],
                  },
                  {
                    id: 'homework14',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework14_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1DfhFVbghsouSFGeLPTDBlYy-HNv_BV7uQ3cBflx_Nn4/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 15',
                children: [
                  {
                    id: 'video15',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video15_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15',
                      },
                    ],
                  },
                  {
                    id: 'topics15',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic15_1',
                        name: '0:00 - Homework Check',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16',
                      },
                      {
                        id: 'topic15_2',
                        name: '4:31 - Question 1',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16&t=271s',
                      },
                      {
                        id: 'topic15_3',
                        name: '6:46 - Question 2',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16&t=735s',
                      },
                      {
                        id: 'topic15_4',
                        name: '12:15 - Question 3',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16&t=735s',
                      },
                      {
                        id: 'topic15_5',
                        name: '22:08 - Concept+Question 4',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16&t=1328s',
                      },
                      {
                        id: 'topic15_6',
                        name: '37:41 - Question 5',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16&t=2261s',
                      },
                      {
                        id: 'topic15_7',
                        name: '42:59 - Question 6',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16&t=2579s',
                      },
                      {
                        id: 'topic15_8',
                        name: '49:02 - Question 7',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16&t=2942s',
                      },
                      {
                        id: 'topic15_9',
                        name: '55:05 - Question 8',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16&t=3305s',
                      },
                      {
                        id: 'topic15_10',
                        name: '59:13 - Question 9',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16&t=3553s',
                      }
                    ],
                  },
                  {
                    id: 'summary15',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary15_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1TyICooqyTG3J3-cUPgHwCGc3-ckV7-sALuj59WWAUlg/edit?tab=t.0#heading=h.72hmnat3ebat',
                      },
                    ],
                  },
                  {
                    id: 'homework15',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework15_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1QhQ62MXrI891bKd_k0eKWq5JnS1Jh7lw6tBJuUXmNtE/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 16',
                children: [
                  {
                    id: 'video16',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video16_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=5T-Qd634qdI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16',
                      },
                    ],
                  },
                  {
                    id: 'topics16',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic16_1',
                        name: '0:00 - Homework Discussion',
                        url: 'https://www.youtube.com/watch?v=5T-Qd634qdI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=17',
                      },
                      {
                        id: 'topic16_2',
                        name: '3:50 - Concept',
                        url: 'https://www.youtube.com/watch?v=5T-Qd634qdI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=17&t=230s',
                      },
                      {
                        id: 'topic16_3',
                        name: '6:10 - Question 1',
                        url: 'https://www.youtube.com/watch?v=5T-Qd634qdI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=17&t=370s',
                      }
                    ],
                  },
                  {
                    id: 'summary16',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary16_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1TIYz4QYXplBBQnFBAjfiamGLMgV8pKGxEcAsBRLL3wY/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework16',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework16_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1BG2jW7O43DJjGtgfEodgvawRhcxblRCaC07kApAJZeA/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 17',
                children: [
                  {
                    id: 'video17',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video17_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=qar90widxio&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=17',
                      },
                    ],
                  },
                  {
                    id: 'topics17',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic17_1',
                        name: '0:00 - Homework Check',
                        url: 'https://www.youtube.com/watch?v=qar90widxio&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=18',
                      },
                      {
                        id: 'topic17_2',
                        name: '5:10 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=qar90widxio&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=18&t=310s',
                      },
                      {
                        id: 'topic17_3',
                        name: '8:23 - Recap Question 1',
                        url: 'https://www.youtube.com/watch?v=qar90widxio&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=18&t=503s',
                      },
                      {
                        id: 'topic17_4',
                        name: '20:26 - Question 2',
                        url: 'https://www.youtube.com/watch?v=qar90widxio&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=18&t=1226s',
                      },
                      {
                        id: 'topic17_5',
                        name: '42:10 - Question 3',
                        url: 'https://www.youtube.com/watch?v=qar90widxio&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=18&t=2530s',
                      },
                      {
                        id: 'topic17_6',
                        name: '56:41 - Question 4',
                        url: 'https://www.youtube.com/watch?v=qar90widxio&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=18&t=3401s',
                      }
                    ],
                  },
                  {
                    id: 'summary17',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary17_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1HgPZLwGVd2YuzPJ-uajQW8D9rL570n0tVVHQAE4Jc6c/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework17',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework17_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1InBzxW12WYLoZWMapTOn50yxh3Hm9Q3yEPHlmgoCHko/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 18',
                children: [
                  {
                    id: 'video18',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video18_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=hPhVjZxcFRU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=18',
                      },
                    ],
                  },
                  {
                    id: 'topics18',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic18_1',
                        name: '0:00 - Homework Check',
                        url: 'https://www.youtube.com/watch?v=hPhVjZxcFRU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=19',
                      },
                      {
                        id: 'topic18_2',
                        name: '5:31 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=hPhVjZxcFRU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=19&t=331s',
                      },
                      {
                        id: 'topic18_3',
                        name: '7:36 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=hPhVjZxcFRU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=19&t=456s',
                      },
                      {
                        id: 'topic18_4',
                        name: '12:58 - Question 1',
                        url: 'https://www.youtube.com/watch?v=hPhVjZxcFRU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=19&t=778s',
                      },
                      {
                        id: 'topic18_5',
                        name: '31:20 - Question 2',
                        url: 'https://www.youtube.com/watch?v=hPhVjZxcFRU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=19&t=1880s',
                      },
                      {
                        id: 'topic18_6',
                        name: '47:59 - Question 3',
                        url: 'https://www.youtube.com/watch?v=hPhVjZxcFRU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=19&t=2879s',
                      },
                      {
                        id: 'topic18_7',
                        name: '1:08:01 - Question 4',
                        url: 'https://www.youtube.com/watch?v=hPhVjZxcFRU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=19&t=4081s',
                      }
                    ],
                  },
                  {
                    id: 'summary18',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary18_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1WL92_MKhTjGg5aypTH2JzRmPQ4d1nupK7-zqPJAgRNk/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework18',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework18_content',
                        name: 'No Homework was given',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 19',
                children: [
                  {
                    id: 'video19',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video19_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=enVeHI4pdPs&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=19',
                      },
                    ],
                  },
                  {
                    id: 'topics19',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic19_1',
                        name: '0:00 - General Discussion',
                        url: 'https://www.youtube.com/watch?v=enVeHI4pdPs&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=20',
                      },
                      {
                        id: 'topic19_2',
                        name: '1:44 - Recap Problem 1',
                        url: 'https://www.youtube.com/watch?v=enVeHI4pdPs&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=20&t=104s',
                      },
                      {
                        id: 'topic19_3',
                        name: '27:01 - Recap Problem 2',
                        url: 'https://www.youtube.com/watch?v=enVeHI4pdPs&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=20&t=1621s',
                      },
                      {
                        id: 'topic19_4',
                        name: '46:50 - Recap Problem 2 Solution',
                        url: 'https://www.youtube.com/watch?v=enVeHI4pdPs&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=20&t=2810s',
                      },
                      {
                        id: 'topic19_5',
                        name: '48:38 - Recap Problem 3',
                        url: 'https://www.youtube.com/watch?v=enVeHI4pdPs&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=20&t=2918s',
                      },
                      {
                        id: 'topic19_6',
                        name: '57:06 - Recap Problem 3 Solution',
                        url: 'https://www.youtube.com/watch?v=enVeHI4pdPs&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=20&t=3426s',
                      },
                      {
                        id: 'topic19_7',
                        name: '1:02:33 - Recap Problem 4',
                        url: 'https://www.youtube.com/watch?v=enVeHI4pdPs&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=20&t=3753s',
                      },
                      {
                        id: 'topic19_8',
                        name: '1:10:55 - Recap Problem 4 Solution',
                        url: 'https://www.youtube.com/watch?v=enVeHI4pdPs&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=20&t=4255s',
                      }
                    ],
                  },
                  {
                    id: 'summary19',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary19_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1WL92_MKhTjGg5aypTH2JzRmPQ4d1nupK7-zqPJAgRNk/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework19',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework19_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1cAocKh7SA3nAtEg0vaYX9pcehcmJmNw_yu3mPz53KKg/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 20',
                children: [
                  {
                    id: 'video20',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video20_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=20',
                      },
                    ],
                  },
                  {
                    id: 'topics20',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic20_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21',
                      },
                      {
                        id: 'topic20_2',
                        name: '3:22 - Doubts asked',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=202s',
                      },
                      {
                        id: 'topic20_3',
                        name: '5:24 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=324s',
                      },
                      {
                        id: 'topic20_4',
                        name: '8:22 - Question 1',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=502s',
                      },
                      {
                        id: 'topic20_5',
                        name: '19:58 - Question 2',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=1198s',
                      },
                      {
                        id: 'topic20_6',
                        name: '30:13 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=1813s',
                      },
                      {
                        id: 'topic20_7',
                        name: '38:19 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=2299s',
                      },
                      {
                        id: 'topic20_8',
                        name: '43:04 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=2584s',
                      },
                      {
                        id: 'topic20_9',
                        name: '47:57 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=2877s',
                      },
                      {
                        id: 'topic20_10',
                        name: '53:51 - Question 2',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=3231s',
                      },
                      {
                        id: 'topic20_11',
                        name: '1:06:38 - Question 3',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=3998s',
                      }
                    ],
                  },
                  {
                    id: 'summary20',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary20_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/17LuGI3R0Z691RL2Ncpe36Hbl5zyUxZwSjfb9D1yZgVI/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework20',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework20_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1BK6vc-zVfccZOz9TvQeJSZ1oICIDNNyfJPgXD1dF5VE/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              }
            ],
          }
        ],
      },
    ],
  }
];

const TreeItem: React.FC<{ node: TreeNode; level?: number }> = ({ 
  node, 
  level = 0 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  // Calculate font size based on level
  const getFontSize = () => {
    switch(level) {
      case 1: return '26px';  // Class 
      case 2: return '24px';  // Topic
      case 3: return '22px';  // Sub-topic
      case 4: return '20px';  // Lectures
      case 5: return '18px';  // Full Video Link, Class Topics, etc.
      default: return '16px'; // Nested topics
    }
  };

  const toggleExpand = () => {
    if (hasChildren) setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ marginLeft: '1rem' }}>
      <div
        onClick={toggleExpand}
        style={{
          cursor: hasChildren || node.url ? 'pointer' : 'default',
          fontWeight: hasChildren ? 'bold' : 'normal',
          fontSize: getFontSize(),
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {hasChildren && (
          <span style={{ marginRight: '5px' }}>{isExpanded ? '▼' : '▶'}</span>
        )}
        {!hasChildren && (
          <span style={{ marginRight: '10px', fontSize: level > 5 ? '16px' : '14px' }}>•</span>
        )}

        {node.url ? (
          <a
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#090deeff', textDecoration: 'underline' }}
          >
            {node.name}
          </a>
        ) : (
          node.name
        )}
      </div>

      {isExpanded && hasChildren && (
        <div>
          {node.children?.map((child) => (
            <TreeItem key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeView: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '1rem',
      }}
    >
      <h1 style={{ fontSize: '32px', marginBottom: '1rem' }}>A Simple Teacher</h1>
      {treeData.map((node) => (
        <TreeItem key={node.id} node={node} level={1} />
      ))}
    </div>
  );
};

export default TreeView;

