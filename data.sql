--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4 (Debian 16.4-1.pgdg120+1)
-- Dumped by pg_dump version 16.4 (Debian 16.4-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: Question; Type: TABLE DATA; Schema: public; Owner: quiz-ko
--

COPY public."Question" (id, title, description, point, type) FROM stdin;
2d17c061-fd92-4c6a-aad9-dc58aa477105	Algorithme de tri	Quel est l'algorithme de tri qui a la meilleure complexité dans le pire des cas ?	3	SINGLE
5dcdbae4-1a7f-4e86-94de-04e56b4a2d35	Structure de données	Quelle est la structure de données la plus adaptée pour implémenter une file d'attente (FIFO) ?	5	SINGLE
\.


--
-- Data for Name: Answer; Type: TABLE DATA; Schema: public; Owner: quiz-ko
--

COPY public."Answer" (id, label, "isCorrect", "questionId") FROM stdin;
b5623f58-299a-40e3-a061-6c2abce4731b	Tri par insertion	f	2d17c061-fd92-4c6a-aad9-dc58aa477105
12436475-67ea-4fb6-9aeb-46f71d711f55	Tri par sélection	f	2d17c061-fd92-4c6a-aad9-dc58aa477105
5ba63907-5840-4f33-82ad-c4deb0920278	Tri rapide (Quicksort)	f	2d17c061-fd92-4c6a-aad9-dc58aa477105
b3bee58f-432d-48eb-babd-49814d31d98b	Tri fusion (Merge sort)	t	2d17c061-fd92-4c6a-aad9-dc58aa477105
1edc42c3-e5e0-4104-b3b6-27f2d80d3d39	Pile (Stack)	f	5dcdbae4-1a7f-4e86-94de-04e56b4a2d35
abf93f01-5603-4d37-a441-be46ba3d45e3	Liste chaînée	f	5dcdbae4-1a7f-4e86-94de-04e56b4a2d35
7eac8cc6-d989-4794-98d9-e910000246e5	File (Queue)	t	5dcdbae4-1a7f-4e86-94de-04e56b4a2d35
2ea654dd-4b65-49ee-b10b-a62974c5340d	Arbre binaire	f	5dcdbae4-1a7f-4e86-94de-04e56b4a2d35
\.


--
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: quiz-ko
--

COPY public."Category" (id, label) FROM stdin;
32b6d5d0-d090-42f0-86b1-41d3272e26f1	GB
092af54f-2a49-4a20-bbfe-0ef9827061ff	IG
a02ec501-ed66-4aec-a69b-8538e195797a	SR
\.


--
-- Data for Name: Level; Type: TABLE DATA; Schema: public; Owner: quiz-ko
--

COPY public."Level" (id, label) FROM stdin;
40682526-90ab-44c0-9141-06ed01807d6f	L1
16448fbf-1c26-4ced-87b5-52d168119cda	L2
fe39db73-bfbb-43a7-8f41-08cb8e8bd43f	L3
91600dcc-b894-4999-9eb5-93183b9f93ec	M1
af413e00-93ba-418a-ad4c-07017f22c530	M2
\.


--
-- Data for Name: Class; Type: TABLE DATA; Schema: public; Owner: quiz-ko
--

COPY public."Class" (id, "group", "levelId", "categoryId") FROM stdin;
bf94a726-5934-4339-9efe-f41f0ebb1da8	G1	40682526-90ab-44c0-9141-06ed01807d6f	32b6d5d0-d090-42f0-86b1-41d3272e26f1
2bcc9fb4-b1b0-4cef-b872-2d92cfdfb0f7	G2	40682526-90ab-44c0-9141-06ed01807d6f	32b6d5d0-d090-42f0-86b1-41d3272e26f1
09a371ae-b9e4-4492-86ef-15d8ac27b5da	G2	40682526-90ab-44c0-9141-06ed01807d6f	092af54f-2a49-4a20-bbfe-0ef9827061ff
e78e680c-0279-47c8-b79a-ecebe7baecbd	G1	40682526-90ab-44c0-9141-06ed01807d6f	092af54f-2a49-4a20-bbfe-0ef9827061ff
dee60fa1-85d2-4725-950d-48ba26870793	G1	40682526-90ab-44c0-9141-06ed01807d6f	a02ec501-ed66-4aec-a69b-8538e195797a
8dab2a18-b6c1-4fe9-982b-c4415dc7fb36	G2	40682526-90ab-44c0-9141-06ed01807d6f	a02ec501-ed66-4aec-a69b-8538e195797a
19a86e7c-baf7-4df1-a6be-e111ae64ee80	\N	16448fbf-1c26-4ced-87b5-52d168119cda	a02ec501-ed66-4aec-a69b-8538e195797a
5afab7e4-877d-426c-a506-07bf9bcdb8ad	\N	16448fbf-1c26-4ced-87b5-52d168119cda	32b6d5d0-d090-42f0-86b1-41d3272e26f1
324db699-75ef-4617-8bc7-7aefbec76bf0	\N	16448fbf-1c26-4ced-87b5-52d168119cda	092af54f-2a49-4a20-bbfe-0ef9827061ff
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: quiz-ko
--

COPY public."User" (id, "lastName", "firstName", email, password, role) FROM stdin;
f2d62444-5706-4908-8b06-4436fa5587ca	Admin	admin	admin@gmail.com	$2b$10$jLGP22bUfYebhLCVOcP8pOgfDq4398F6KulW45TWgrbkhgpcnl55.	ADMIN
9ee237c7-1655-46dd-bcae-c055c366b32e	Mirana	Seheno	student1@gmail.com	$2b$10$WclLA1w6uXfABUMrL88jc.tNMe1qlZ.4H7SfjhnbRbwM2Eru3rft.	STUDENT
5bcd19a8-5852-435d-b898-6f2b5f96804c	Sahaza	Tafitasoa	student2@gmail.com	$2b$10$Rt3i.oWqQcZFr6KeZ4/Sq.5BVdY4nRAlNU3Hws5rItVX2um/8wblC	STUDENT
\.


--
-- Data for Name: Student; Type: TABLE DATA; Schema: public; Owner: quiz-ko
--

COPY public."Student" (id, "registrationNumber", gender, phone, "userId", "classId") FROM stdin;
9c32481a-4b7f-4a46-b6e4-4b0245225e55	2244	MALE	+261340000000	9ee237c7-1655-46dd-bcae-c055c366b32e	5afab7e4-877d-426c-a506-07bf9bcdb8ad
5df14de7-fd67-4fc7-821d-d09d1dfb5548	2255	MALE	+261340000000	5bcd19a8-5852-435d-b898-6f2b5f96804c	bf94a726-5934-4339-9efe-f41f0ebb1da8
\.


--
-- Data for Name: Subject; Type: TABLE DATA; Schema: public; Owner: quiz-ko
--

COPY public."Subject" (id, label) FROM stdin;
58cd52cf-28d2-4224-b877-a276b32055df	Alogrithme 2024
aa3bd1a1-cc8a-40bc-80a7-1389061c2f5f	Merise 2024
\.


--
-- Data for Name: Test; Type: TABLE DATA; Schema: public; Owner: quiz-ko
--

COPY public."Test" (id, title, duration, "isActive", "subjectId") FROM stdin;
c6b63104-20db-4a32-a599-fba639f17620	Test de connaissance	01:30:00.586	t	58cd52cf-28d2-4224-b877-a276b32055df
83652fc3-6ad7-4ec7-a440-0b4728bd9b87	Examen Merise	03:00:00.013	t	aa3bd1a1-cc8a-40bc-80a7-1389061c2f5f
\.


--
-- Data for Name: Result; Type: TABLE DATA; Schema: public; Owner: quiz-ko
--

COPY public."Result" (id, "interimScore", score, "testId", "studentId") FROM stdin;
\.


--
-- Data for Name: StudentTestAnswer; Type: TABLE DATA; Schema: public; Owner: quiz-ko
--

COPY public."StudentTestAnswer" ("testId", "studentId", "answerId", "openAnswer") FROM stdin;
c6b63104-20db-4a32-a599-fba639f17620	9c32481a-4b7f-4a46-b6e4-4b0245225e55	b3bee58f-432d-48eb-babd-49814d31d98b	Tri fusion (Merge sort)
\.


--
-- Data for Name: SubjectQuestions; Type: TABLE DATA; Schema: public; Owner: quiz-ko
--

COPY public."SubjectQuestions" ("questionId", "subjectId") FROM stdin;
2d17c061-fd92-4c6a-aad9-dc58aa477105	58cd52cf-28d2-4224-b877-a276b32055df
5dcdbae4-1a7f-4e86-94de-04e56b4a2d35	58cd52cf-28d2-4224-b877-a276b32055df
\.


--
-- Data for Name: TestsClass; Type: TABLE DATA; Schema: public; Owner: quiz-ko
--

COPY public."TestsClass" ("testId", "classId") FROM stdin;
83652fc3-6ad7-4ec7-a440-0b4728bd9b87	5afab7e4-877d-426c-a506-07bf9bcdb8ad
c6b63104-20db-4a32-a599-fba639f17620	5afab7e4-877d-426c-a506-07bf9bcdb8ad
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: quiz-ko
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
c3dcaaf6-9317-4e59-8b46-1eb3d67d2746	f7cbb972da269fa18324800da2e90e69312a02d86bc7820cc4e1e7d94b4cfb0f	2024-10-15 03:09:47.015678+00	20241015030946_	\N	\N	2024-10-15 03:09:46.945747+00	1
943e1060-67f7-4e43-b75c-e893e83ffd15	405ea45300897e7438630bb8c29c84917e761efd1d0f110ba0af1470a593ad41	2024-10-15 03:02:04.162547+00	20241015023502_init	\N	\N	2024-10-15 03:02:04.088725+00	1
b550695c-b2c7-475b-817e-50e6ebd2f10a	405ea45300897e7438630bb8c29c84917e761efd1d0f110ba0af1470a593ad41	2024-10-15 02:35:02.550586+00	20241015023502_init	\N	\N	2024-10-15 02:35:02.47884+00	1
\.


--
-- PostgreSQL database dump complete
--

