import {
  Document,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";

import {
  TEducation,
  TProfileState,
  TSkill,
  TWorkHistory,
} from "../../../components/layouts/EditLayout";
import { DateYMString } from "../../editor/types";
import EmailIcon from "./EmailIcon";
import GitHubIcon from "./GitHubIcon";
import LinkIcon from "./LinkIcon";
import LinkedinIcon from "./LinkeinIcon";
import LocationMarkerIcon from "./LocationMarkerIcon";
import PhoneIcon from "./PhoneIcon";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 32,
  },
  heading: {
    fontWeight: "bold",
    borderBottom: 2,
    marginRight: "auto",
    paddingBottom: 20,
    height: 20,
    fontSize: 16,
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 24,
    borderRadius: 5,
    color: "#fff",
    backgroundColor: "#333",
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  profileItem: {
    width: "33.3%",
    marginBottom: 4,
    display: "flex",
    flexDirection: "row",
  },
  profileItemText: {
    color: "#ddd",
    fontSize: 10,
    marginLeft: 4,
  },
  personal: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 32,
  },
  jobDescription: {
    width: "70%",
    fontSize: 10,
    color: "#444",
  },
  employmentHistory: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: 8,
  },
  employmentHistoryRange: {
    marginTop: 2,
    marginRight: "auto",
    fontSize: 10,
  },
  employmentHistoryMain: {
    width: "70%",
    fontSize: 10,
  },
  employmentHistoryMainHeading: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
  },
  education: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: 8,
  },
  educationRange: {
    marginTop: 2,
    marginRight: "auto",
    fontSize: 10,
  },
  educationMain: {
    width: "70%",
    fontSize: 10,
  },
  educationMainHeading: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
});

type MyDocumentProps = {
  profileState: TProfileState;
  skills: TSkill[];
  workList: TWorkHistory[];
  educationList: TEducation[];
};
function MyDocument({
  profileState,
  skills,
  workList,
  educationList,
}: MyDocumentProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>
            {`${profileState.firstName || ""} ${profileState.lastName || ""}`}
          </Text>
          <Text style={styles.jobTitle}>{profileState.jobTitle}</Text>
          <View
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {profileState.email && (
              <View style={styles.profileItem}>
                <EmailIcon />
                <Text style={styles.profileItemText}>{profileState.email}</Text>
              </View>
            )}
            {profileState.phoneNumber && (
              <View style={styles.profileItem}>
                <PhoneIcon />
                <Text style={styles.profileItemText}>
                  {profileState.phoneNumber}
                </Text>
              </View>
            )}
            {profileState.address && (
              <View style={styles.profileItem}>
                <LocationMarkerIcon />
                <Text style={styles.profileItemText}>
                  {profileState.address}
                </Text>
              </View>
            )}
            {profileState.github && (
              <View style={styles.profileItem}>
                <GitHubIcon />
                <Text style={styles.profileItemText}>
                  {profileState.github}
                </Text>
              </View>
            )}
            {profileState.linkedin && (
              <View style={styles.profileItem}>
                <LinkedinIcon />
                <Text style={styles.profileItemText}>
                  {profileState.linkedin}
                </Text>
              </View>
            )}
            {profileState.website && (
              <View style={styles.profileItem}>
                <LinkIcon />
                <Text style={styles.profileItemText}>
                  {profileState.website}
                </Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.personal}>
          <View style={styles.heading}>
            <Text>Profile</Text>
          </View>
          <Text style={styles.jobDescription}>{profileState.summary}</Text>
        </View>
        <View
          style={{ marginBottom: 24, display: "flex", flexDirection: "row" }}
        >
          <Text style={styles.heading}>Skills</Text>
          <View style={{ width: "70%", fontSize: 12 }}>
            {skills.map((skill) => (
              <>
                <Text style={{ marginBottom: 4 }}>{skill.category}</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 8,
                  }}
                >
                  {skill.name.map((item, i) => (
                    <Text key={item} style={{ fontSize: 10, color: "#444" }}>
                      {i !== skill.name.length - 1 ? `${item}, ` : item}
                    </Text>
                  ))}
                </View>
              </>
            ))}
          </View>
        </View>
        <View style={{ marginBottom: 24 }}>
          <Text style={{ ...styles.heading, marginBottom: 16 }}>
            Employment History
          </Text>
          {workList &&
            workList.map((work) => (
              <View style={styles.employmentHistory} key={work.jobTitle}>
                <View style={styles.employmentHistoryRange}>
                  <Text>
                    {format(
                      new Date(work.startDate as DateYMString),
                      "MMMM yyyy",
                    )}{" "}
                    –{" "}
                    {format(
                      new Date(work.endDate as DateYMString),
                      "MMMM yyyy",
                    )}
                  </Text>
                </View>
                <View style={styles.employmentHistoryMain}>
                  <Text style={styles.employmentHistoryMainHeading}>
                    {`${work.jobTitle || "(jot title)"}${
                      work.employer && ` at ${work.employer}`
                    }`}
                  </Text>
                  <Text style={{ color: "#444" }}>{work.description}</Text>
                </View>
              </View>
            ))}
        </View>
        <View>
          <Text style={{ ...styles.heading, marginBottom: 16 }}>Education</Text>
          {educationList &&
            educationList.map((education) => (
              <View key={education.school} style={styles.education}>
                <View style={styles.educationRange}>
                  <Text>
                    {format(
                      new Date(education.startDate as DateYMString),
                      "MMMM yyyy",
                    )}{" "}
                    –{" "}
                    {format(
                      new Date(education.endDate as DateYMString),
                      "MMMM yyyy",
                    )}
                  </Text>
                </View>
                <View style={styles.educationMain}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginRight: "auto",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Text style={styles.educationMainHeading}>
                      {`${education.school || "(school name)"}`}
                    </Text>
                    <Text style={{}}>{education.city || ""}</Text>
                  </View>
                  <Text style={{ marginBottom: 8, color: "#444" }}>
                    {education.degree}
                  </Text>
                  <Text style={{ color: "#444" }}>{education.description}</Text>
                </View>
              </View>
            ))}
        </View>
      </Page>
    </Document>
  );
}

type PreviewProps = {
  profileState: TProfileState;
  skills: TSkill[];
  workList: TWorkHistory[];
  educationList: TEducation[];
};
function Preview({
  profileState,
  skills,
  workList,
  educationList,
}: PreviewProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setIsClient(true);
    }
  }, []);

  return (
    <div id="preview" className="h-full bg-slate-600">
      <div className="mx-auto flex h-full w-3/4 flex-col p-4">
        <div className="h-full w-full grow bg-white shadow">
          {isClient && (
            <PDFViewer width={"100%"} height={"100%"} showToolbar={true}>
              <MyDocument
                profileState={profileState}
                skills={skills}
                workList={workList}
                educationList={educationList}
              />
            </PDFViewer>
          )}
        </div>
      </div>
    </div>
  );
}

export default Preview;
