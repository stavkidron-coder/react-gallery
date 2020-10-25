CREATE TABLE images (
	id SERIAL PRIMARY KEY,
	path varchar,
	description varchar,
	likes integer DEFAULT 0
);

INSERT INTO images ("path", "description")
VALUES ('images/Drums.jpg', 'Drums'),
('images/SG.jpg', 'Gibson SG'),
('images/Synth.jpg', 'Synthesizer'),
('images/Records.jpg', 'Records'),
('images/Studio.jpg', 'Recording Studio'),
('images/Live_Music_Venue.jpg', 'Music Venue');