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
              },
            ],
          },
          {
                id: 'lecture',
                name: 'Lecture 21',
                children: [
                  {
                    id: 'video21',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video21_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21',
                      },
                    ],
                  },
                  {
                    id: 'topics21',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic21_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22',
                      },
                      {
                        id: 'topic21_2',
                        name: '10:01 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22&t=601s',
                      },
                      {
                        id: 'topic21_3',
                        name: '14:35 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22&t=875s',
                      },
                      {
                        id: 'topic21_4',
                        name: '19:11 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22&t=1151s',
                      },
                      {
                        id: 'topic21_5',
                        name: '22:28 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22&t=1348s',
                      },
                      {
                        id: 'topic21_6',
                        name: '24:21 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22&t=1461s',
                      },
                      {
                        id: 'topic21_7',
                        name: '28:18 - Queston 1',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22&t=1698s',
                      },
                      {
                        id: 'topic21_8',
                        name: '54:31 - Question 2',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22&t=3271s',
                      },
                      {
                        id: 'topic21_9',
                        name: '55:51 - Question 3',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22&t=3351s',
                      },
                      {
                        id: 'topic21_10',
                        name: '60:01  - Question 4',
                        url: 'https://youtu.be/mfHupJVzFng?list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&t=3602',
                      },
                    ],
                  },
                  {
                    id: 'summary21',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary21_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1K4WrrzUqT3xItFthSD7VGsRN056tts0PvfHZvpJhg5g/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework21',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework21_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1S1_XO6kChP7_qwVUkOQcFemIXpOiZxwHNoMjWMPDto4/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 22',
                children: [
                  {
                    id: 'video22',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video22_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=SfISoF8TXhw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22',
                      },
                    ],
                  },
                  {
                    id: 'topics22',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic22_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=SfISoF8TXhw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=23',
                      },
                      {
                        id: 'topic22_2',
                        name: '5:50 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=SfISoF8TXhw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=23&t=350s',
                      },
                      {
                        id: 'topic22_3',
                        name: '12:47 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=SfISoF8TXhw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=23&t=767s',
                      },
                      {
                        id: 'topic22_4',
                        name: '17:44 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=SfISoF8TXhw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=23&t=1064s',
                      },
                      {
                        id: 'topic22_5',
                        name: '25:34 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=SfISoF8TXhw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=23&t=1534s',
                      },
                      {
                        id: 'topic22_6',
                        name: '31:02 - Question 1',
                        url: 'https://www.youtube.com/watch?v=SfISoF8TXhw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=23&t=1862s',
                      },
                      {
                        id: 'topic22_7',
                        name: '38:48 - Queston 2',
                        url: 'https://www.youtube.com/watch?v=SfISoF8TXhw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=23&t=2328s',
                      },
                      {
                        id: 'topic22_8',
                        name: '46:18 - Question 3',
                        url: 'https://www.youtube.com/watch?v=SfISoF8TXhw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=23&t=2778s',
                      }
                    ],
                  },
                  {
                    id: 'summary22',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary22_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1sQEx0gOrXLbwzvIQ0TcdO1-HieuBtpqKr2SQX4k9EqA/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework22',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework22_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/14ykeVPqOt_PlklnaY9Dw_tzQqqMN1Uoi8GZMJ2JF684/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 23',
                children: [
                  {
                    id: 'video23',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video23_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=23',
                      },
                    ],
                  },
                  {
                    id: 'topics23',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic23_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24',
                      },
                      {
                        id: 'topic23_2',
                        name: '4:05 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24&t=245s',
                      },
                      {
                        id: 'topic23_3',
                        name: '6:51 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24&t=411s',
                      },
                      {
                        id: 'topic23_4',
                        name: '9:33 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24&t=573s',
                      },
                      {
                        id: 'topic23_5',
                        name: '11:25 - Question 1',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24&t=685s',
                      },
                      {
                        id: 'topic23_6',
                        name: '23:01 - Question 2',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24&t=1381s',
                      },
                      {
                        id: 'topic23_7',
                        name: '28:01 - Question 3',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24&t=1681s',
                      },
                      {
                        id: 'topic23_8',
                        name: '42:10 - Question 4',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24&t=2530s',
                      },
                      {
                        id: 'topic23_9',
                        name: '55:24 - Question 5',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24&t=3324s',
                      }
                    ],
                  },
                  {
                    id: 'summary23',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary23_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1wGGINqk2yKz69GNZ2KjPArk6DL7XhRE-2gXgXOjlDeE/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework23',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework23_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1uG9xe4OJbeQyHR2p6V3cn5bqi88aWULXh_c3XiYkk8E/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 24',
                children: [
                  {
                    id: 'video24',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video24_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24',
                      },
                    ],
                  },
                  {
                    id: 'topics24',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic24_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25',
                      },
                      {
                        id: 'topic24_2',
                        name: '4:34 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25&t=274s',
                      },
                      {
                        id: 'topic24_3',
                        name: '10:40 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25&t=640s',
                      },
                      {
                        id: 'topic24_4',
                        name: '13:05 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25&t=785s',
                      },
                      {
                        id: 'topic24_5',
                        name: '15:35 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25&t=935s',
                      },
                      {
                        id: 'topic24_6',
                        name: '33:50 - Question 1',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25&t=2030s',
                      },
                      {
                        id: 'topic24_7',
                        name: '44:30 - Question 2',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25&t=2670s',
                      },
                      {
                        id: 'topic24_8',
                        name: '1:03:09 - Question 3',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25&t=3789s',
                      },
                      {
                        id: 'topic24_9',
                        name: '1:09:11 - Question 4',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25&t=4151s',
                      }
                    ],
                  },
                  {
                    id: 'summary24',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary24_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1gdXXWIH5cmLnoLb98bmvw64pfvqr8jcqzK9vdX05xYw/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework24',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework24_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1sOvgN2vAPqs-zPS8VAH1Aj8wTbSRhnJzo-Xr4Sre-S4/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 25',
                children: [
                  {
                    id: 'video25',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video25_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=Keua0H6PP3k&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25',
                      },
                    ],
                  },
                  {
                    id: 'topics25',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic25_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=Keua0H6PP3k&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=26',
                      },
                      {
                        id: 'topic25_2',
                        name: '2:29 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=Keua0H6PP3k&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=26&t=149s',
                      },
                      {
                        id: 'topic25_3',
                        name: '3:51 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=Keua0H6PP3k&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=26&t=231s',
                      },
                      {
                        id: 'topic25_4',
                        name: '10:42 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=Keua0H6PP3k&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=26&t=642s',
                      },
                      {
                        id: 'topic25_5',
                        name: '12:56 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=Keua0H6PP3k&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=26&t=776s',
                      },
                      {
                        id: 'topic25_6',
                        name: '23:06 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=Keua0H6PP3k&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=26&t=1386s',
                      },
                      {
                        id: 'topic25_7',
                        name: '30:31 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=Keua0H6PP3k&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=26&t=1831s',
                      },
                      {
                        id: 'topic25_8',
                        name: '47:52 - Question 1',
                        url: 'https://www.youtube.com/watch?v=Keua0H6PP3k&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=26&t=2872s',
                      }
                    ],
                  },
                  {
                    id: 'summary25',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary25_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1e-aCDXnnWcNbw6n0Lxgli8zHT05aB_UqzzuLwmQKM2w/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework25',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework25_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1_RF1psGNgO-qaPuGvDHA6jGfUqLk7cBubqUfb9LJTJ8/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 26',
                children: [
                  {
                    id: 'video26',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video26_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=OE5o7Ip8Qwg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=26',
                      },
                    ],
                  },
                  {
                    id: 'topics26',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic26_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=OE5o7Ip8Qwg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=27',
                      },
                      {
                        id: 'topic26_2',
                        name: '4:40 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=OE5o7Ip8Qwg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=27&t=280s',
                      },
                      {
                        id: 'topic26_3',
                        name: '11:01 - Question 1',
                        url: 'https://www.youtube.com/watch?v=OE5o7Ip8Qwg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=27&t=661s',
                      },
                      {
                        id: 'topic26_4',
                        name: '27:21 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=OE5o7Ip8Qwg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=27&t=1641s',
                      },
                      {
                        id: 'topic26_5',
                        name: '41:40 - Question 2',
                        url: 'https://www.youtube.com/watch?v=OE5o7Ip8Qwg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=27&t=2500s',
                      }
                    ],
                  },
                  {
                    id: 'summary26',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary26_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1NAPrI4HZnHRJP7Jzxl6AsKFiLu4yolJfZNRrLU7zo6o/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework26',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework26_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1hPR0ylUJ1xBbdiKE3FXfqBYj7c5uFIxXsb59ZCMD4BA/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 27',
                children: [
                  {
                    id: 'video27',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video27_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=Oj1dYqRL9M0&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=27',
                      },
                    ],
                  },
                  {
                    id: 'topics27',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic27_1',
                        name: '0:00 - Mini BRAHMOS Project Explaintion',
                        url: 'https://www.youtube.com/watch?v=Oj1dYqRL9M0&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=28',
                      }
                    ],
                  },
                  {
                    id: 'summary27',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary27_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1o-wCWPNN8R3grUX2006UStQrf4fbUeI2G6NBUpc8Kvg/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework27',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework27_content',
                        name: 'No Homework was given',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 28',
                children: [
                  {
                    id: 'video28',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video28_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=eEoWuyAVvHQ&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=28',
                      },
                    ],
                  },
                  {
                    id: 'topics28',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic28_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=eEoWuyAVvHQ&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=29',
                      },
                      {
                        id: 'topic28_2',
                        name: '8:57 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=eEoWuyAVvHQ&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=29&t=537s',
                      },
                      {
                        id: 'topic28_3',
                        name: '21:03 - Question 1',
                        url: 'https://www.youtube.com/watch?v=eEoWuyAVvHQ&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=29&t=1263s',
                      },
                      {
                        id: 'topic28_4',
                        name: '48:41 - Question 2',
                        url: 'https://www.youtube.com/watch?v=eEoWuyAVvHQ&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=29&t=2921s',
                      }
                    ],
                  },
                  {
                    id: 'summary28',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary28_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1y8dCJOKTt4rOWvrt4ic6Yw49jkLP5814Sd9grRnPPMU/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework28',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework28_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1tqCMfYTkdszA95HgMMubvT0eLlXnHQVZWMc7UqiPppY/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 29',
                children: [
                  {
                    id: 'video29',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video29_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=Qt9Fginjmyw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=29',
                      },
                    ],
                  },
                  {
                    id: 'topics29',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic29_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=Qt9Fginjmyw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=30',
                      },
                      {
                        id: 'topic29_2',
                        name: '3:21 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=Qt9Fginjmyw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=30&t=201s',
                      },
                      {
                        id: 'topic29_3',
                        name: '16:42 - Question 1',
                        url: 'https://www.youtube.com/watch?v=Qt9Fginjmyw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=30&t=1002s',
                      },
                      {
                        id: 'topic29_4',
                        name: '28:16 - Question 2',
                        url: 'https://www.youtube.com/watch?v=Qt9Fginjmyw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=30&t=1696s',
                      },
                      {
                        id: 'topic29_5',
                        name: '51:58 - Question 3',
                        url: 'https://www.youtube.com/watch?v=Qt9Fginjmyw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=30&t=3118s',
                      },
                      {
                        id: 'topic29_6',
                        name: '1:05:26 - Question 4',
                        url: 'https://www.youtube.com/watch?v=Qt9Fginjmyw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=30&t=3926s',
                      }
                    ],
                  },
                  {
                    id: 'summary29',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary29_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1zN2f7EmmLE3lfQ_8zch7yr9LZxO8hkO7CDMhIe7vGhE/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework29',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework29_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1iNxGZhhL6uh7Cx2IoCxcNbMvScampjWbjB-jvQa35T8/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 30',
                children: [
                  {
                    id: 'video30',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video30_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=hLOlXHhMBy8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=30',
                      },
                    ],
                  },
                  {
                    id: 'topics30',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic30_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=hLOlXHhMBy8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=31',
                      },
                      {
                        id: 'topic30_2',
                        name: '9:02 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=hLOlXHhMBy8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=31&t=542s',
                      },
                      {
                        id: 'topic30_3',
                        name: '30:26 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=hLOlXHhMBy8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=31&t=1826s',
                      },
                      {
                        id: 'topic30_4',
                        name: '38:20 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=hLOlXHhMBy8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=31&t=2300s',
                      },
                      {
                        id: 'topic30_5',
                        name: '52:52 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=hLOlXHhMBy8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=31&t=3172s',
                      },
                      {
                        id: 'topic30_6',
                        name: '58:16 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=hLOlXHhMBy8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=31&t=3496s',
                      }
                    ],
                  },
                  {
                    id: 'summary30',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary30_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/11jwR4jTcj-kKZ9PZ8wDfCPpZbu3YbIuBTP7v43kH3Xg/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework30',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework30_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1kOEunhlV3c8SvokmlpYzwzT4tsRmP5p0jIS-5I3FFCM/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 31',
                children: [
                  {
                    id: 'video31',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video31_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=gA8EQ_QFHkU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=31',
                      },
                    ],
                  },
                  {
                    id: 'topics31',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic31_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=gA8EQ_QFHkU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=32',
                      },
                      {
                        id: 'topic31_2',
                        name: '4:33 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=gA8EQ_QFHkU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=32&t=273s',
                      },
                      {
                        id: 'topic31_3',
                        name: '16:28 - Question 1',
                        url: 'https://www.youtube.com/watch?v=gA8EQ_QFHkU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=32&t=988s',
                      },
                      {
                        id: 'topic31_4',
                        name: '34:49 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=gA8EQ_QFHkU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=32&t=2089s',
                      },
                      {
                        id: 'topic31_5',
                        name: '41:21 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=gA8EQ_QFHkU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=32&t=2481s',
                      },
                      {
                        id: 'topic31_6',
                        name: '49:04 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=gA8EQ_QFHkU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=32&t=2944s',
                      },
                      {
                        id: 'topic31_7',
                        name: '53:48 - Question 2',
                        url: 'https://www.youtube.com/watch?v=gA8EQ_QFHkU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=32&t=3228s',
                      }
                    ],
                  },
                  {
                    id: 'summary31',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary31_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1flGuuqjmhUdOfNf2hsSbLforXnjbXTZsJlDvPqRur4U/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework31',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework31_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1l0ldhbPIcelHG11qfnCYdnqeoCIsOkwplRJdf9wantU/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              }
            ],
          },
          {
            id: 'ratio and proportion',
            name: 'Ratio and Proportion',
            children: [
              {
                id: 'lecture',
                name: 'Lecture 1',
                children: [
                  {
                    id: 'video1',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video1_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=MKXrOOWYBEA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=1',
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
                        url: 'https://www.youtube.com/watch?v=MKXrOOWYBEA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=2',
                      },
                      {
                        id: 'topic1_2',
                        name: '8:38 - Question 2',
                        url: 'https://www.youtube.com/watch?v=MKXrOOWYBEA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=2&t=518s',
                      },
                      {
                        id: 'topic1_3',
                        name: '16:55 - Question 3',
                        url: 'https://www.youtube.com/watch?v=MKXrOOWYBEA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=2&t=1015s',
                      },
                      {
                        id: 'topic1_4',
                        name: '27:20 - Question 4',
                        url: 'https://www.youtube.com/watch?v=MKXrOOWYBEA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=2&t=1640s',
                      },
                      {
                        id: 'topic1_5',
                        name: '33:33 - Concept',
                        url: 'https://www.youtube.com/watch?v=MKXrOOWYBEA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=2&t=2013s',
                      },
                      {
                        id: 'topic1_6',
                        name: '37:53 - Question 3 Explaination',
                        url: 'https://www.youtube.com/watch?v=MKXrOOWYBEA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=2&t=2273s',
                      },
                      {
                        id: 'topic1_7',
                        name: '39:41 - Question 4 Explaination',
                        url: 'https://youtu.be/MKXrOOWYBEA?list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&t=2381',
                      },
                      {
                        id: 'topic1_8',
                        name: '49:07 - Question 5',
                        url: 'https://www.youtube.com/watch?v=MKXrOOWYBEA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=2&t=2947s',
                      },
                      {
                        id: 'topic1_9',
                        name: '1:01:06 - Question 6',
                        url: 'https://www.youtube.com/watch?v=MKXrOOWYBEA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=2&t=3666s',
                      }
                    ],
                  },
                  {
                    id: 'summary1',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary1_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/19cFxNCkHHnftjcukjOquHLDaCO5cUB7jibbnf9Yhp0k/edit?tab=t.0',
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
                        url: 'https://docs.google.com/document/d/1K5wdZf-lKDF-7Anz5k2elo2txh46nIxIevClf39XTLQ/edit?tab=t.0#heading=h.yzo54eetb7ff'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 2',
                children: [
                  {
                    id: 'video2',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video2_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=2',
                      },
                    ],
                  },
                  {
                    id: 'topics2',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic2_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3',
                      },
                      {
                        id: 'topic2_2',
                        name: '7:47 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3&t=467s',
                      },
                      {
                        id: 'topic2_3',
                        name: '13:37 - Question 1',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3&t=817s',
                      },
                      {
                        id: 'topic2_4',
                        name: '26:19 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3&t=1579s',
                      },
                      {
                        id: 'topic2_5',
                        name: '31:28 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3&t=1888s',
                      },
                      {
                        id: 'topic2_6',
                        name: '34:26 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3&t=2066s',
                      },
                      {
                        id: 'topic2_7',
                        name: '37:34 - Question 2',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3&t=2254s',
                      },
                      {
                        id: 'topic2_8',
                        name: '59:21 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3&t=3561s',
                      },
                      {
                        id: 'topic2_9',
                        name: '1:04:49 - Question 3',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3&t=3889s',
                      },
                      {
                        id: 'topic2_10',
                        name: '1:12:07 - Question 4',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3&t=4327s',
                      }
                    ],
                  },
                  {
                    id: 'summary2',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary2_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/12EumDrTEmMAyPYcwTMqAs5EQgg3T8dV49Z8sDoaQn6Y/edit?tab=t.0',
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
                        url: 'https://docs.google.com/document/d/1lK35OKEBLhpcetoalNDfJNgm91N2DO2V1Bo6enYvzxc/edit?tab=t.0#heading=h.iyouxg42yadq'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 3',
                children: [
                  {
                    id: 'video3',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video3_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3',
                      },
                    ],
                  },
                  {
                    id: 'topics3',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic3_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4',
                      },
                      {
                        id: 'topic3_2',
                        name: '6:06 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4&t=366s',
                      },
                      {
                        id: 'topic3_3',
                        name: '10:03 - Concept',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4&t=603s',
                      },
                      {
                        id: 'topic3_4',
                        name: '13:14 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4&t=794s',
                      },
                      {
                        id: 'topic3_5',
                        name: '18:41 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4&t=1121s',
                      },
                      {
                        id: 'topic3_6',
                        name: '27:51 - Question 1',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4&t=1671s',
                      },
                      {
                        id: 'topic3_7',
                        name: '45:57 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4&t=2757s',
                      },
                      {
                        id: 'topic3_8',
                        name: '49:56 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4&t=2996s',
                      },
                      {
                        id: 'topic3_9',
                        name: '56:26 - Question 2',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4&t=3386s',
                      },
                      {
                        id: 'topic3_10',
                        name: '1:05:35 - Question 3',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4&t=3935s',
                      }
                    ],
                  },
                  {
                    id: 'summary3',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary3_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1rcXWvfv-Lg7T6MaaX1sUA9oOmlDtu2K9-JsrbyBgSPw/edit?tab=t.0',
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
                        url: 'https://docs.google.com/document/d/1WPMR_DT0ewrzZ0z9n2zHCnUph7trfuAPF-NzLFVOirM/edit?tab=t.0'
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
                        url: 'https://www.youtube.com/watch?v=cDhrR4idxtc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4',
                      },
                    ],
                  },
                  {
                    id: 'topics4',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic4_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=cDhrR4idxtc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=5',
                      },
                      {
                        id: 'topic4_2',
                        name: '2:45 - Concept',
                        url: 'https://www.youtube.com/watch?v=cDhrR4idxtc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=5&t=165s',
                      },
                      {
                        id: 'topic4_3',
                        name: '22:01 - Question 1',
                        url: 'https://www.youtube.com/watch?v=cDhrR4idxtc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=5&t=1321s',
                      },
                      {
                        id: 'topic4_4',
                        name: '30:26 - Question 2',
                        url: 'https://www.youtube.com/watch?v=cDhrR4idxtc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=5&t=1826s',
                      },
                      {
                        id: 'topic4_5',
                        name: '42:17 - Question 3',
                        url: 'https://www.youtube.com/watch?v=cDhrR4idxtc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=5&t=2537s',
                      },
                      {
                        id: 'topic4_6',
                        name: '49:24 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=cDhrR4idxtc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=5&t=2964s',
                      },
                      {
                        id: 'topic4_7',
                        name: '55:16 - Question 4',
                        url: 'https://www.youtube.com/watch?v=cDhrR4idxtc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=5&t=3316s',
                      }
                    ],
                  },
                  {
                    id: 'summary4',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary4_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1OL2nytT5xJCv89AaSuptJHBQIBhq9M-vppWNm9TIBtc/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework4',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework4_content',
                        name: 'No Homework was given'
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
                        url: 'https://www.youtube.com/watch?v=EKEELY_d_Bc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=5',
                      },
                    ],
                  },
                  {
                    id: 'topics5',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic5_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=EKEELY_d_Bc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=6',
                      },
                      {
                        id: 'topic5_2',
                        name: '16:41 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=EKEELY_d_Bc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=6&t=1001s',
                      },
                      {
                        id: 'topic5_3',
                        name: '37:23 - Question 2',
                        url: 'https://www.youtube.com/watch?v=EKEELY_d_Bc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=6&t=2243s',
                      },
                      {
                        id: 'topic5_4',
                        name: '52:01 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=EKEELY_d_Bc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=6&t=3121s',
                      },
                      {
                        id: 'topic5_5',
                        name: '58:01 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=EKEELY_d_Bc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=6&t=3481s',
                      },
                      {
                        id: 'topic5_6',
                        name: '1:06:12 - Question 3',
                        url: 'https://www.youtube.com/watch?v=EKEELY_d_Bc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=6&t=3972s',
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
                        url: 'https://docs.google.com/document/d/1xNc9NUh63l_VG1Gub_t1oScWfBFT0FdIZkHw315FRi0/edit?tab=t.0',
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
                        url: 'https://docs.google.com/document/d/1KOWSM8u55oTP6Ifk36ykQJ-a0fwnTRzdAa7Imszk10k/edit?tab=t.0'
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
                        url: 'https://www.youtube.com/watch?v=XXSQzu6cQPc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=6',
                      },
                    ],
                  },
                  {
                    id: 'topics6',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic6_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=XXSQzu6cQPc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=7',
                      },
                      {
                        id: 'topic6_2',
                        name: '6:37 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=XXSQzu6cQPc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=7&t=397s',
                      },
                      {
                        id: 'topic6_3',
                        name: '11:37 - Question 1',
                        url: 'https://www.youtube.com/watch?v=XXSQzu6cQPc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=7&t=697s',
                      },
                      {
                        id: 'topic6_4',
                        name: '26:41 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=XXSQzu6cQPc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=7&t=1601s',
                      },
                      {
                        id: 'topic6_5',
                        name: '31:13 - Question 2',
                        url: 'https://www.youtube.com/watch?v=XXSQzu6cQPc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=7&t=1873s',
                      },
                      {
                        id: 'topic6_6',
                        name: '53:26 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=XXSQzu6cQPc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=7&t=3206s',
                      },
                      {
                        id: 'topic6_7',
                        name: '56:18 - Question 3',
                        url: 'https://www.youtube.com/watch?v=XXSQzu6cQPc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=7&t=3378s',
                      },
                      {
                        id: 'topic6_8',
                        name: '1:12:36 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=XXSQzu6cQPc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=7&t=4356s',
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
                        url: 'https://docs.google.com/document/d/1vd2oA47KOlnrUP7-uqgoObngln3MacsMXI4AzTJPcMA/edit?tab=t.0',
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
                        url: 'https://docs.google.com/document/d/1BZUHRrt5bnx3sP4J5PV05iJ4kt8t9VUjjzNSGNZwEEo/edit?tab=t.0'
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
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=7',
                      },
                    ],
                  },
                  {
                    id: 'topics7',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic7_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8',
                      },
                      {
                        id: 'topic7_2',
                        name: '5:11 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8&t=311s',
                      },
                      {
                        id: 'topic7_3',
                        name: '9:21 - Question 1',
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8&t=561s',
                      },
                      {
                        id: 'topic7_4',
                        name: '25:38 - Question 2',
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8&t=1538s',
                      },
                      {
                        id: 'topic7_5',
                        name: '43:47 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8&t=2627s',
                      },
                      {
                        id: 'topic7_6',
                        name: '48:41 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8&t=2921s',
                      },
                      {
                        id: 'topic7_7',
                        name: '51:36 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8&t=3096s',
                      },
                      {
                        id: 'topic7_8',
                        name: '58:19 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8&t=3499s',
                      },
                      {
                        id: 'topic7_9',
                        name: '1:02:25 - Question 3',
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8&t=3745s',
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
                        url: 'https://docs.google.com/document/d/1sFFzwzePjLm3aS3av0di_l2gpk5_bNcAG0xhitHA2Po/edit?tab=t.0',
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
                        url: 'https://docs.google.com/document/d/18GRzXPaFa2906L2rKS_uDuilp611dViqSs1x7BOvVCc/edit?tab=t.0'
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
                        url: 'https://www.youtube.com/watch?v=DSfOAgJKsIA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8',
                      },
                    ],
                  },
                  {
                    id: 'topics8',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic8_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=DSfOAgJKsIA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=9',
                      },
                      {
                        id: 'topic8_2',
                        name: '3:09 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=DSfOAgJKsIA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=9&t=189s',
                      },
                      {
                        id: 'topic8_3',
                        name: '14:55 - Question 1',
                        url: 'https://www.youtube.com/watch?v=DSfOAgJKsIA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=9&t=895s',
                      },
                      {
                        id: 'topic8_4',
                        name: '50:15 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=DSfOAgJKsIA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=9&t=3015s',
                      },
                      {
                        id: 'topic8_5',
                        name: '56:51 - Question 2',
                        url: 'https://www.youtube.com/watch?v=DSfOAgJKsIA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=9&t=3411s',
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
                        url: 'https://docs.google.com/document/d/1AUNfqJ_Nx3hbKWNDb1ytw5X6ZcZ3RkkXRs3hH4ST8LM/edit?tab=t.0',
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
                        url: 'https://docs.google.com/document/d/1-8f6Fj6XNNMC-MeU3dOcuT_WJpWR3z8VA3nng5M7dYo/edit?tab=t.0'
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
                        url: 'https://www.youtube.com/watch?v=y4QWA5sSqiU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=9',
                      },
                    ],
                  },
                  {
                    id: 'topics9',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic9_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=y4QWA5sSqiU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=9',
                      },
                      {
                        id: 'topic9_2',
                        name: '8:16 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=y4QWA5sSqiU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=10&t=496s',
                      },
                      {
                        id: 'topic9_3',
                        name: '11:15 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=y4QWA5sSqiU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=10&t=675s',
                      },
                      {
                        id: 'topic9_4',
                        name: '17:35 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=y4QWA5sSqiU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=10&t=1055s',
                      },
                      {
                        id: 'topic9_5',
                        name: '31:12 - Question 1',
                        url: 'https://www.youtube.com/watch?v=y4QWA5sSqiU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=10&t=1872s',
                      },
                      {
                        id: 'topic9_6',
                        name: '34:16 - Question 2',
                        url: 'https://www.youtube.com/watch?v=y4QWA5sSqiU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=10&t=2056s',
                      },
                      {
                        id: 'topic9_7',
                        name: '1:02:51 - Question 3',
                        url: 'https://www.youtube.com/watch?v=y4QWA5sSqiU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=10&t=3771s',
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
                        url: 'https://docs.google.com/document/d/1ngZupg9rE1YNzSbPYUKAfETgvzwVk7WAOY7X0XnJ2EQ/edit?tab=t.0',
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
                        url: 'https://docs.google.com/document/d/1OD2QerrfgXsz7itsBVTxxrLKDFTVia2NVUZ93c64j4U/edit?tab=t.0'
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
                        url: 'https://www.youtube.com/watch?v=iQZSw3V8vqs&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=10',
                      },
                    ],
                  },
                  {
                    id: 'topics10',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic10_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=iQZSw3V8vqs&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=11',
                      },
                      {
                        id: 'topic10_2',
                        name: '4:51 - Doubt 1',
                        url: 'http://youtube.com/watch?v=iQZSw3V8vqs&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=11&t=291s',
                      },
                      {
                        id: 'topic10_3',
                        name: '10:23 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=iQZSw3V8vqs&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=11&t=623s',
                      },
                      {
                        id: 'topic10_4',
                        name: '17:37 - Concept',
                        url: 'https://www.youtube.com/watch?v=iQZSw3V8vqs&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=11&t=1057s',
                      },
                      {
                        id: 'topic10_5',
                        name: '23:41 - Question 1',
                        url: 'https://www.youtube.com/watch?v=iQZSw3V8vqs&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=11&t=1421s',
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
                        url: 'https://docs.google.com/document/d/1wEaMnf6ch1i4JETKvQu9VPeA3gpzi7cFbyJnCCmwrsE/edit?tab=t.0',
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
                        url: 'https://docs.google.com/document/d/1tPlrk-GpO7HPecktKyflVFZBmUb5kHE2UuzBY899LgE/edit?tab=t.0'
                      },
                    ],
                  },
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
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=11',
                      },
                    ],
                  },
                  {
                    id: 'topics11',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic11_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12',
                      },
                      {
                        id: 'topic11_2',
                        name: '7:51 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12&t=471s',
                      },
                      {
                        id: 'topic11_3',
                        name: '14:02 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12&t=842s',
                      },
                      {
                        id: 'topic11_4',
                        name: '19:02 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12&t=1142s',
                      },
                      {
                        id: 'topic11_5',
                        name: '26:18 - New method',
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12&t=1578s',
                      },
                      {
                        id: 'topic11_6',
                        name: '39:51 - Concept',
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12&t=2391s',
                      },
                      {
                        id: 'topic11_7',
                        name: '45:11 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12&t=2711s',
                      },
                      {
                        id: 'topic11_8',
                        name: '49:44 -Doubt 5',
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12&t=2984s',
                      },
                      {
                        id: 'topic11_9',
                        name: '1:00:01 - Question 1',
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12&t=3601s',
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
                        url: 'https://docs.google.com/document/d/1RXj85Kv2SMHlfMgKv4573ZQRS9h-JsPrNcjs7kjyr1I/edit?tab=t.0',
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
                        url: 'https://docs.google.com/document/d/1OD2QerrfgXsz7itsBVTxxrLKDFTVia2NVUZ93c64j4U/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture12',
                name: 'Lecture 12',
                children: [
                  {
                    id: 'video12',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video12_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=mU4divrFwko&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12',
                      },
                    ],
                  },
                  {
                    id: 'topics12',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic12_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=mU4divrFwko&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=13',
                      },
                      {
                        id: 'topic12_2',
                        name: '13:11 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=mU4divrFwko&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=13&t=791s',
                      },
                      {
                        id: 'topic12_3',
                        name: '20:27 - Question 1',
                        url: 'https://www.youtube.com/watch?v=mU4divrFwko&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=13&t=1227s',
                      },
                      {
                        id: 'topic12_4',
                        name: '54:51 - Question 2',
                        url: 'https://www.youtube.com/watch?v=mU4divrFwko&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=13&t=3291s',
                      },
                      {
                        id: 'topic12_5',
                        name: '1:15:03 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=mU4divrFwko&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=13&t=4503s',
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
                        url: 'https://docs.google.com/document/d/1a3njLr6myP6d7supDQuvaRkJVTGe0pRustNTa-G9HoY/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework12',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework12_content',
                        name: 'No Homework was given'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture13',
                name: 'Lecture 13',
                children: [
                  {
                    id: 'video13',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video13_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=3-pKrt64MgU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=13',
                      },
                    ],
                  },
                  {
                    id: 'topics13',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic13_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=3-pKrt64MgU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=14',
                      },
                      {
                        id: 'topic13_2',
                        name: '1:43 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=3-pKrt64MgU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=14&t=103s',
                      },
                      {
                        id: 'topic13_3',
                        name: '12:26 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=3-pKrt64MgU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=14&t=746s',
                      },
                      {
                        id: 'topic13_4',
                        name: '33:36 - Question 1',
                        url: 'https://www.youtube.com/watch?v=3-pKrt64MgU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=14&t=2016s',
                      },
                      {
                        id: 'topic13_5',
                        name: '1:09:19 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=3-pKrt64MgU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=14&t=4159s',
                      },
                      {
                        id: 'topic13_6',
                        name: '1:15:19 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=3-pKrt64MgU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=14&t=4519s',
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
                        url: 'https://docs.google.com/document/d/1nY0g5giIZS2eZ7IAXojjUesn1RXpIaxGoPvk1yQSg9Y/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework13',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework13_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1WzO_XmJLKR1erh7EgvzSwCb8wtiPNBWLZxY15R11bAE/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture14',
                name: 'Lecture 14',
                children: [
                  {
                    id: 'video14',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video14_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=2GUayIAjPZM&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=14',
                      },
                    ],
                  },
                  {
                    id: 'topics14',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic14_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=2GUayIAjPZM&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=15',
                      },
                      {
                        id: 'topic14_2',
                        name: '6:31 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=2GUayIAjPZM&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=15&t=391s',
                      },
                      {
                        id: 'topic14_3',
                        name: '13:37 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=2GUayIAjPZM&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=15&t=817s',
                      },
                      {
                        id: 'topic14_4',
                        name: '28:35 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=2GUayIAjPZM&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=15&t=1715s',
                      },
                      {
                        id: 'topic14_5',
                        name: '43:38 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=2GUayIAjPZM&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=15&t=2618s',
                      },
                      {
                        id: 'topic14_6',
                        name: '48:02 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=2GUayIAjPZM&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=15&t=2882s',
                      },
                      {
                        id: 'topic14_7',
                        name: '55:06 - Question 1',
                        url: 'https://www.youtube.com/watch?v=2GUayIAjPZM&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=15&t=3306s',
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
                        url: 'https://docs.google.com/document/d/1N754mzweENMXIpejogV968fnhHVIfJSeihBiHcDxTZ4/edit?tab=t.0',
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
                        url: 'https://docs.google.com/document/d/1S4YQ45YZOPfCMpG0ffFC5z9bKiNG3jpNPl-hlWAjcGE/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture15',
                name: 'Lecture 15',
                children: [
                  {
                    id: 'video15',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video15_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=uEQxCvcQf_A&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=15',
                      },
                    ],
                  },
                  {
                    id: 'topics15',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic15_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=uEQxCvcQf_A&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=16',
                      },
                      {
                        id: 'topic15_2',
                        name: '9:01 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=uEQxCvcQf_A&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=16&t=541s',
                      },
                      {
                        id: 'topic15_3',
                        name: '45:35 - Question 1',
                        url: 'https://www.youtube.com/watch?v=uEQxCvcQf_A&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=16&t=2735s',
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
                        url: 'https://docs.google.com/document/d/11dZNF3BLodoprT8_ZsWDpYXssU8KCXm6FIDA44WiF7M/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework15',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework15_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
              }
            ]
          }
        ],
      },
    ],
  },
  {
    id: 'class8',
    name: 'Class 8',
    children: [
      {
        id: 'physics',
        name: 'Physics',
        children: [
          {
            id: 'graphs and motion',
            name: 'Graphs and Motion',
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
                        url: 'https://www.youtube.com/watch?v=OsoSvvBqe74&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=1',
                      },
                    ],
                  },
                  {
                    id: 'topics1',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic1_1',
                        name: '0:00 - TPL and Displacement',
                        url: 'https://www.youtube.com/watch?v=OsoSvvBqe74&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=2',
                      },
                      {
                        id: 'topic1_2',
                        name: '13:29 - Trivia Question',
                        url: 'https://www.youtube.com/watch?v=OsoSvvBqe74&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=2&t=809s',
                      },
                      {
                        id: 'topic1_3',
                        name: '29:29 - Question 1',
                        url: 'https://www.youtube.com/watch?v=OsoSvvBqe74&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=2&t=1769s',
                      },
                      {
                        id: 'topic1_4',
                        name: '36:50 - Question 2',
                        url: 'https://www.youtube.com/watch?v=OsoSvvBqe74&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=2&t=2210s',
                      },
                      {
                        id: 'topic1_5',
                        name: '48:18 - Question 3',
                        url: 'https://www.youtube.com/watch?v=OsoSvvBqe74&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=2&t=2898s',
                      },
                      {
                        id: 'topic1_6',
                        name: '55:58 - Question 4',
                        url: 'https://www.youtube.com/watch?v=OsoSvvBqe74&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=2&t=3358s',
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
                        url: 'https://docs.google.com/document/d/1QVpyKzdXW-bIjLrfmkR0fO2JNZu3Zbk_yTFRwS8XLFg/edit?tab=t.0',
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
                        url: 'https://docs.google.com/document/d/1RNpddZbFEjWpzMADZ-s7fTvwZJgX2ebTagdEXh1eiEs/edit?tab=t.0',
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
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=2',
                      },
                    ],
                  },
                  {
                    id: 'topics2',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic2_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3',
                      },
                      {
                        id: 'topic2_2',
                        name: '5:37 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=337s',
                      },
                      {
                        id: 'topic2_3',
                        name: '8:52 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=532s',
                      },
                      {
                        id: 'topic2_4',
                        name: '12:03 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=723s',
                      },
                      {
                        id: 'topic2_5',
                        name: '15:04 - Concept',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=904s',
                      },
                      {
                        id: 'topic2_6',
                        name: '17:53 - Question 1',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=1073s',
                      },
                      {
                        id: 'topic2_7',
                        name: '23:30 - Direction',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=1410s',
                      },
                      {
                        id: 'topic2_8',
                        name: '27:00 - Angles',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=1620s',
                      },
                      {
                        id: 'topic2_9',
                        name: '29:09 - Examples',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=1749s',
                      },
                      {
                        id: 'topic2_10',
                        name: '32:42 - Discussion',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=1962s',
                      },
                      {
                        id: 'topic2_11',
                        name: '36:51 - Questions 2,3,4',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=2211s',
                      },
                      {
                        id: 'topic2_12',
                        name: '49:52 - Question 5',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=2992s',
                      }
                    ],
                  },
                  {
                    id: 'summary2',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary2_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1onmjtZW6mAz4h8zv_q7n4uL-y2COPnC_rJe_xp_UEDI/edit?tab=t.0',
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
                        url: 'https://docs.google.com/document/d/1wiAQa5oaraZOCudvl7V_oFaVhz0AVfZKJ4IGbTIPn1o/edit?tab=t.0',
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
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3',
                      },
                    ],
                  },
                  {
                    id: 'topics3',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic3_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4',
                      },
                      {
                        id: 'topic3_2',
                        name: '5:25 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=325s',
                      },
                      {
                        id: 'topic3_3',
                        name: '8:47 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=527s',
                      },
                      {
                        id: 'topic3_4',
                        name: '16:00 - Concept 1',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=960s',
                      },
                      {
                        id: 'topic3_5',
                        name: '20:31 - Question 1',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=1231s',
                      },
                      {
                        id: 'topic3_6',
                        name: '23:21 - Question 2',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=1401s',
                      },
                      {
                        id: 'topic3_7',
                        name: '25:10 - Question 3',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=1510s',
                      },
                      {
                        id: 'topic3_8',
                        name: '29:43 - Question 4',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=1783s',
                      },
                      {
                        id: 'topic3_9',
                        name: '31:22 - Question 5',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=1882s',
                      },
                      {
                        id: 'topic3_10',
                        name: '34:18 - Question 6',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=2058s',
                      },
                      {
                        id: 'topic3_11',
                        name: '42:46 - Doubt 2(continued)',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=2566s',
                      },
                      {
                        id: 'topic3_12',
                        name: '46:09 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=2769s',
                      },
                      {
                        id: 'topic3_13',
                        name: '48:33 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=2913s',
                      },
                      {
                        id: 'topic3_14',
                        name: '52:51 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=3171s',
                      },
                      {
                        id: 'topic3_15',
                        name: '56:29 - Concept 2',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=3389s',
                      }
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
                        url: 'https://docs.google.com/document/d/1gmixu0l8Q4uZmFZe38d10BFKl-oEebHa_rp8dexjHWo/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture4',
                name: 'Lecture 4',
                children: [
                  {
                    id: 'video4',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video4_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=uLGDU1XXnjI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4',
                      },
                    ],
                  },
                  {
                    id: 'topics4',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic4_1',
                        name: '0:00 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=uLGDU1XXnjI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=5',
                      },
                      {
                        id: 'topic4_2',
                        name: '14:05 - Question 1',
                        url: 'https://www.youtube.com/watch?v=uLGDU1XXnjI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=5&t=845s',
                      },
                      {
                        id: 'topic4_3',
                        name: '32:15 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=uLGDU1XXnjI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=5&t=1935s',
                      },
                      {
                        id: 'topic4_4',
                        name: '43:27 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=uLGDU1XXnjI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=5&t=2607s',
                      },
                      {
                        id: 'topic4_5',
                        name: '49:27 - Concept',
                        url: 'https://www.youtube.com/watch?v=uLGDU1XXnjI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=5&t=2967s',
                      },
                      {
                        id: 'topic4_6',
                        name: '50:35 - Question 2',
                        url: 'https://www.youtube.com/watch?v=uLGDU1XXnjI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=5&t=3035s',
                      },
                      {
                        id: 'topic4_7',
                        name: '55:48 - Trigonometry',
                        url: 'https://www.youtube.com/watch?v=uLGDU1XXnjI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=5&t=3348s',
                      },
                      {
                        id: 'topic4_8',
                        name: '1:12:29 - Question 3',
                        url: 'https://www.youtube.com/watch?v=uLGDU1XXnjI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=5&t=4349s',
                      }
                    ],
                  },
                  {
                    id: 'summary4',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary4_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1tMNwkiNDPRg-KnLiT2m6Ur2e4bFYYU1dzaAhsbnGLjI/edit?tab=t.0',
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
                        url: 'https://docs.google.com/document/d/1Kdsqzu5h0zdm4DkE6MzX6dxQyr8r6QUEcD_Y6oxJqzo/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture5',
                name: 'Lecture 5',
                children: [
                  {
                    id: 'video5',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video5_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=rIbH_mMvtXc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=5',
                      },
                    ],
                  },
                  {
                    id: 'topics5',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic5_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=rIbH_mMvtXc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=6',
                      },
                      {
                        id: 'topic5_2',
                        name: '6:30 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=rIbH_mMvtXc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=6&t=390s',
                      },
                      {
                        id: 'topic5_3',
                        name: '8:06 - Question 1',
                        url: 'https://www.youtube.com/watch?v=rIbH_mMvtXc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=6&t=486s',
                      },
                      {
                        id: 'topic5_4',
                        name: '22:54 - Question 2',
                        url: 'https://www.youtube.com/watch?v=rIbH_mMvtXc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=6&t=1374s',
                      },
                      {
                        id: 'topic5_5',
                        name: '36:03 - Question 3',
                        url: 'https://www.youtube.com/watch?v=rIbH_mMvtXc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=6&t=2163s',
                      },
                      {
                        id: 'topic5_6',
                        name: '42:13 - Concept',
                        url: 'https://www.youtube.com/watch?v=rIbH_mMvtXc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=6&t=2533s',
                      },
                      {
                        id: 'topic5_7',
                        name: '57:23 - Question 4',
                        url: 'https://www.youtube.com/watch?v=rIbH_mMvtXc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=6&t=3443s',
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
                        url: 'https://docs.google.com/document/d/1_O62tKesDFqoPBZnYLNiDH6Y7qTq1z0oe11vbZ3_Fkk/edit?tab=t.0',
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
                        url: 'https://docs.google.com/document/d/1bfooCkDKcsmz5Rmf_AO1yP4MZBpNfGFkaRceJe4bHL4/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture6',
                name: 'Lecture 6',
                children: [
                  {
                    id: 'video6',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video6_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=Spok3vdVzr4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=6',
                      },
                    ],
                  },
                  {
                    id: 'topics6',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic6_1',
                        name: '0:00 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=Spok3vdVzr4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=7',
                      },
                      {
                        id: 'topic6_2',
                        name: '9:46 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=Spok3vdVzr4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=7&t=586s',
                      },
                      {
                        id: 'topic6_3',
                        name: '15:19 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=Spok3vdVzr4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=7&t=919s',
                      },
                      {
                        id: 'topic6_4',
                        name: '24:39 - Question 1',
                        url: 'https://www.youtube.com/watch?v=Spok3vdVzr4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=7&t=1479s',
                      },
                      {
                        id: 'topic6_5',
                        name: '38:53 - Concept',
                        url: 'https://www.youtube.com/watch?v=Spok3vdVzr4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=7&t=2333s',
                      },
                      {
                        id: 'topic6_6',
                        name: '55:48 - Question 2',
                        url: 'https://www.youtube.com/watch?v=Spok3vdVzr4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=7&t=3348s',
                      },
                      {
                        id: 'topic6_7',
                        name: '1:02:25 - Concept',
                        url: 'https://www.youtube.com/watch?v=Spok3vdVzr4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=7&t=3745s',
                      },
                      {
                        id: 'topic6_8',
                        name: '1:04:56 - Question 3',
                        url: 'https://www.youtube.com/watch?v=Spok3vdVzr4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=7&t=3896s',
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
                        url: 'https://docs.google.com/document/d/1no7ByqcjG_DdpQzjDQtjOcBEyynTuJ5_j_v6BnWaemg/edit?tab=t.0',
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
                        url: 'https://docs.google.com/document/d/1ofHQPaJtnovLgLd0I8jQt0A_JsQk_FWvitFIorTb4mU/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture7',
                name: 'Lecture 7',
                children: [
                  {
                    id: 'video7',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video7_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=wxbKjx6sqOo&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=7',
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
                        url: 'https://www.youtube.com/watch?v=wxbKjx6sqOo&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=8',
                      },
                      {
                        id: 'topic7_2',
                        name: '4:32 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=wxbKjx6sqOo&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=8&t=272s',
                      },
                      {
                        id: 'topic7_3',
                        name: '11:50 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=wxbKjx6sqOo&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=8&t=710s',
                      },
                      {
                        id: 'topic7_4',
                        name: '35:56 - Concept',
                        url: 'https://www.youtube.com/watch?v=wxbKjx6sqOo&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=8&t=2156s',
                      },
                      {
                        id: 'topic7_5',
                        name: '40:32 - Question 1',
                        url: 'https://www.youtube.com/watch?v=wxbKjx6sqOo&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=8&t=2432s',
                      },
                      {
                        id: 'topic7_6',
                        name: '56:35 - Question 2',
                        url: 'https://www.youtube.com/watch?v=wxbKjx6sqOo&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=8&t=3395s',
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
                        url: 'https://docs.google.com/document/d/1LRby6Q5uA8BS8GE7odgN8RsUfHDK-kbFz_h5FyfmcJE/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework7',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework7_content',
                        name: 'No Homework was Assigned'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture8',
                name: 'Lecture 8',
                children: [
                  {
                    id: 'video8',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video8_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=7OybG_Weyfc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=8',
                      },
                    ],
                  },
                  {
                    id: 'topics8',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic8_1',
                        name: '0:00 - Concept of Integration',
                        url: 'https://www.youtube.com/watch?v=7OybG_Weyfc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=9',
                      },
                      {
                        id: 'topic8_2',
                        name: '18:52 - Question 1',
                        url: 'https://www.youtube.com/watch?v=7OybG_Weyfc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=9&t=1132s',
                      },
                      {
                        id: 'topic8_3',
                        name: '31:52 - Question 2',
                        url: 'https://www.youtube.com/watch?v=7OybG_Weyfc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=9&t=1912s',
                      },
                      {
                        id: 'topic8_4',
                        name: '51:23 - Concept',
                        url: 'https://www.youtube.com/watch?v=7OybG_Weyfc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=9&t=3083s',
                      },
                      {
                        id: 'topic8_5',
                        name: '54:44 - Question 3',
                        url: 'https://www.youtube.com/watch?v=7OybG_Weyfc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=9&t=3284s',
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
                        url: 'https://docs.google.com/document/d/1JBaLu263Xpona4NjHWG5QbtuVOj4wIFaLOVAaB8IPiY/edit?tab=t.0',
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
                        url: 'https://docs.google.com/document/d/19qXeTQWN4X7oChjpHdKmmKe9acMqvWcu3eVP3MKzqLc/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture9',
                name: 'Lecture 9',
                children: [
                  {
                    id: 'video9',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video9_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=9',
                      },
                    ],
                  },
                  {
                    id: 'topics9',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic9_1',
                        name: '0:00 - Homework Discussion',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10',
                      },
                      {
                        id: 'topic9_2',
                        name: '7:12 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=432s',
                      },
                      {
                        id: 'topic9_3',
                        name: '11:07 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=667s',
                      },
                      {
                        id: 'topic9_4',
                        name: '16:20 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=980s',
                      },
                      {
                        id: 'topic9_5',
                        name: '19:57 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=1197s',
                      },
                      {
                        id: 'topic9_6',
                        name: '22:31 - Concept',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=1351s',
                      },
                      {
                        id: 'topic9_7',
                        name: '35:18 - Question 1',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=2118s',
                      },
                      {
                        id: 'topic9_8',
                        name: '42:42 - Question 2',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=2562s',
                      },
                      {
                        id: 'topic9_9',
                        name: '51:13 - Question 3',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=3073s',
                      },
                      {
                        id: 'topic9_10',
                        name: '1:01:39 - Question 4',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=3699s',
                      },
                      {
                        id: 'topic9_11',
                        name: '1:17:29 - Question 5',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=4649s',
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
                        url: 'https://docs.google.com/document/d/1gzRTxZDOfqs3Fl9Va2UqfVMo7NjfCDOtxWBegvn2PME/edit?tab=t.0',
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
                        url: 'https://docs.google.com/document/d/1n_n7VxWSNdmhLPm3XPjo9GJ8aGQNw9PZHNKo0LsEcCE/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture10',
                name: 'Lecture 10',
                children: [
                  {
                    id: 'video10',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video10_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=I66S9xXAKho&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10',
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
                        url: 'https://www.youtube.com/watch?v=I66S9xXAKho&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=11',
                      },
                      {
                        id: 'topic10_2',
                        name: '7:45 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=I66S9xXAKho&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=11&t=465s',
                      },
                      {
                        id: 'topic10_3',
                        name: '11:26 - Question 1',
                        url: 'https://www.youtube.com/watch?v=I66S9xXAKho&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=11&t=686s',
                      },
                      {
                        id: 'topic10_4',
                        name: '24:35 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=I66S9xXAKho&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=11&t=1475s',
                      },
                      {
                        id: 'topic10_5',
                        name: '28:38 - Question 2',
                        url: 'https://www.youtube.com/watch?v=I66S9xXAKho&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=11&t=1718s',
                      },
                      {
                        id: 'topic10_6',
                        name: '49:18 - Question 3',
                        url: 'https://www.youtube.com/watch?v=I66S9xXAKho&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=11&t=2958s',
                      },
                      {
                        id: 'topic10_7',
                        name: '1:05:55 - Question 4',
                        url: 'https://www.youtube.com/watch?v=I66S9xXAKho&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=11&t=3955s',
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
                        url: 'https://docs.google.com/document/d/1PJwaX2_dB3pWVLu6WF2IbhOChBczYlc3y3W57cUnQ5s/edit?tab=t.0',
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
                        url: 'https://docs.google.com/document/d/1cNGJvSvVEnjHHynnIqQjwIfEv101m7YQ026tU3HOrzQ/edit?tab=t.0'
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

