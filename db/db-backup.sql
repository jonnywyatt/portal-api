PGDMP     0                     v           postgres    10.4    10.4     g           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            h           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            i           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            ^          0    16582 
   activities 
   TABLE DATA               �   COPY public.activities (type, subtype, "user", people, start_date_time, end_date_time, quality, location_start, location_end, url, distance_km, id) FROM stdin;
    public       postgres    false    199   
       b          0    16655 	   locations 
   TABLE DATA               8   COPY public.locations (id, lat, lon, label) FROM stdin;
    public       postgres    false    203   �
       ]          0    16561    people 
   TABLE DATA               B   COPY public.people (label, id, last_name, first_name) FROM stdin;
    public       postgres    false    198   	       d          0    16666    subtypes 
   TABLE DATA               3   COPY public.subtypes (id, type, label) FROM stdin;
    public       postgres    false    205   D       [          0    16528    types 
   TABLE DATA               *   COPY public.types (label, id) FROM stdin;
    public       postgres    false    196   y       s           0    0    activities_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.activities_id_seq', 5, true);
            public       postgres    false    200            t           0    0    locations_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.locations_id_seq', 3, true);
            public       postgres    false    202            u           0    0    people_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.people_id_seq', 2, true);
            public       postgres    false    201            v           0    0    subtypes_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.subtypes_id_seq', 2, true);
            public       postgres    false    204            w           0    0    types_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.types_id_seq', 3, true);
            public       postgres    false    197            ^   \   x����	�0��s2E���4(�	�������%�!<�@�;��E*ثlդ��$ԧ�I��C� c��:|��K��L<D�i����Iߜ���7��#�      b   n   x�M�=�0@��>EN�N���.�;���HH���z�S���1(�"U�I�b�ʚ�2��j(�t�,)k!b�x`�[���~��0�{{���-L������u	�7��׈�;&W�      ]   +   x�s̩,.N�4��L,)�ts��+s9���`W� p�F      d   %   x�3�4�*����K�2��Sr3�J��b���� �7#      [   .   x�sL.�,�,��4��+-)�,����4�
JML��K�4����� �kK     