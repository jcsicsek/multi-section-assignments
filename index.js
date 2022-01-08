//process.env.GOOGLE_APPLICATION_CREDENTIALS='./google_client_credentials.json';
process.env.APPLICATION_ID = 'multi-section-assignments'

const {google} = require('googleapis');
const classroom = google.classroom('v1');
const scopes = [
  'https://www.googleapis.com/auth/classroom.courses',
  'https://www.googleapis.com/auth/classroom.courses.readonly',
];
async function getCourses() {

  const auth = new google.auth.GoogleAuth({
      // Scopes can be specified either as an array or as a single, space-delimited string.
      scopes,
      projectId: 'multi-section-assignments',
    });
  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options({auth: authClient});

  const res = await classroom.courses.list({
    teacherId: 'jcsicsek@clanyc.org',
  });

  console.log(res.data);
}

const oauth2Client = new google.auth.OAuth2(
  '344860767185-psnrf4sva6qjaaagumsjf5lafkb85mek.apps.googleusercontent.com',
  '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',
);

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',
  scope: scopes,
  redirect_uri: "google.com",
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
