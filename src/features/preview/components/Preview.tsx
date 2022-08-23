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
  TProfileState,
  TWorkHistory,
} from "../../../components/layouts/EditLayout";
import { DateYMString } from "../../editor/types";

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
  },
  personal: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 24,
  },
  jobDescription: {
    width: "70%",
    fontSize: 12,
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
    fontSize: 12,
  },
  employmentHistoryMainHeading: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

type MyDocumentProps = {
  profileState: TProfileState;
  workList: TWorkHistory[];
};
function MyDocument({ profileState, workList }: MyDocumentProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>
            {`${profileState.firstName || ""} ${profileState.lastName || ""}`}
          </Text>
          <Text style={styles.jobTitle}>{profileState.jobTitle}</Text>
        </View>
        <View style={styles.personal}>
          <View style={styles.heading}>
            <Text>Profile</Text>
          </View>
          <Text style={styles.jobDescription}>{profileState.summary}</Text>
        </View>
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
                  {format(new Date(work.endDate as DateYMString), "MMMM yyyy")}
                </Text>
              </View>
              <View style={styles.employmentHistoryMain}>
                <Text style={styles.employmentHistoryMainHeading}>
                  {`${work.jobTitle || "(jot title)"}${
                    work.employer && ` at ${work.employer}`
                  }`}
                </Text>
                <Text>{work.description}</Text>
              </View>
            </View>
          ))}
      </Page>
    </Document>
  );
}

type PreviewProps = {
  profileState: TProfileState;
  workList: TWorkHistory[];
};
function Preview({ profileState, workList }: PreviewProps) {
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
              <MyDocument profileState={profileState} workList={workList} />
            </PDFViewer>
          )}
        </div>
      </div>
    </div>
  );
}

export default Preview;
