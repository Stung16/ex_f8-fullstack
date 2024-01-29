--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.1

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courses (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.courses OWNER TO postgres;

--
-- Name: course_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.courses ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.course_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: phones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.phones (
    id integer NOT NULL,
    phone character varying(15) NOT NULL,
    user_id integer,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.phones OWNER TO postgres;

--
-- Name: phones_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.phones ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.phones_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    content text NOT NULL,
    user_id integer,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.posts OWNER TO postgres;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.posts ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.posts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users_courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users_courses (
    id integer NOT NULL,
    user_id integer,
    course_id integer,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.users_courses OWNER TO postgres;

--
-- Name: user_course_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users_courses ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.user_course_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    status boolean DEFAULT false,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courses (id, name, price, created_at, updated_at) FROM stdin;
1	course1	123456	2023-12-23 20:42:54.983618+07	2023-12-23 20:42:54.983618+07
2	course2	0	2023-12-23 20:43:08.678947+07	2023-12-23 20:43:08.678947+07
3	course3	99999	2023-12-23 20:43:22.01463+07	2023-12-23 20:43:22.01463+07
\.


--
-- Data for Name: phones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.phones (id, phone, user_id, created_at, updated_at) FROM stdin;
1	0123456789	1	2023-12-23 20:34:56.392634	2023-12-23 20:34:56.392634
2	0123456788	2	2023-12-23 20:35:16.006868	2023-12-23 20:35:16.006868
3	123456787	3	2023-12-23 20:35:16.006868	2023-12-23 20:35:16.006868
4	123456786	4	2023-12-23 20:35:24.894953	2023-12-23 20:35:24.894953
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.posts (id, title, content, user_id, created_at, updated_at) FROM stdin;
1	title1	content1	1	2023-12-23 20:40:17.919292	2023-12-23 20:40:17.919292
2	title2	content2	2	2023-12-23 20:40:17.919292	2023-12-23 20:40:17.919292
3	title3	content3	3	2023-12-23 20:40:17.919292	2023-12-23 20:40:17.919292
4	title4	content4	4	2023-12-23 20:40:17.919292	2023-12-23 20:40:17.919292
5	title5	conten6	5	2023-12-23 20:40:17.919292	2023-12-23 20:40:17.919292
6	title6	conten6	2	2023-12-26 20:09:05.466829	2023-12-26 20:09:05.466829
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, status, created_at, updated_at) FROM stdin;
2	user2	user2@gmail.com	123456	t	2023-12-23 20:32:58.742077	2023-12-23 20:32:58.742077
4	user4	user4@gmail.com	123456\n	t	2023-12-23 20:33:57.81529	2023-12-23 20:33:57.81529
1	user1	user1@gmail.com	123456	f	2023-12-23 20:32:34.144487	2023-12-23 20:32:34.144487
3	user3	user3@gmail.com	123456	f	2023-12-23 20:33:26.415239	2023-12-23 20:33:26.415239
5	user5	user5@gmail.com	123456	t	2023-12-26 20:17:07.384779	2023-12-26 20:17:07.384779
\.


--
-- Data for Name: users_courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users_courses (id, user_id, course_id, created_at, updated_at) FROM stdin;
1	1	1	2023-12-23 20:44:37.383526	2023-12-23 20:44:37.383526
2	3	2	2023-12-23 20:44:50.67758	2023-12-23 20:44:50.67758
3	1	2	2023-12-23 22:00:36.337006	2023-12-23 22:00:36.337006
4	1	3	2023-12-23 22:01:08.684991	2023-12-23 22:01:08.684991
\.


--
-- Name: course_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.course_id_seq', 3, true);


--
-- Name: phones_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.phones_id_seq', 4, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.posts_id_seq', 10, true);


--
-- Name: user_course_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_course_id_seq', 4, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 5, true);


--
-- Name: courses course_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT course_pkey PRIMARY KEY (id);


--
-- Name: phones phones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.phones
    ADD CONSTRAINT phones_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: users_courses user_course_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_courses
    ADD CONSTRAINT user_course_pkey PRIMARY KEY (id);


--
-- Name: users user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: phones phones_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.phones
    ADD CONSTRAINT phones_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: posts posts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: users_courses user_course_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_courses
    ADD CONSTRAINT user_course_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- Name: users_courses user_course_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_courses
    ADD CONSTRAINT user_course_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--
