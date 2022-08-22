import {
  Document,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";

import { TProfileState } from "../../../components/layouts/EditLayout";

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
    marginBottom: 16,
    borderRadius: 5,
    color: "#fff",
    backgroundColor: "#333",
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 4,
  },
  jobtitle: {
    fontSize: 16,
  },
  personal: {
    display: "flex",
    flexDirection: "row",
  },
  jobDescription: {
    width: "70%",
    fontSize: 12,
  },
});

type MyDocumentProps = {
  profileState: TProfileState;
};
function MyDocument({ profileState }: MyDocumentProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>
            {`${profileState.firstName || ""} ${profileState.lastName || ""}`}
          </Text>
          <Text style={styles.jobtitle}>{profileState.jobTitle}</Text>
        </View>
        <View style={styles.personal}>
          <View style={styles.heading}>
            <Text>Profile</Text>
          </View>
          <Text style={styles.jobDescription}>{profileState.summary}</Text>
        </View>
      </Page>
    </Document>
  );
}

type PreviewProps = {
  profileState: TProfileState;
};
function Preview({ profileState }: PreviewProps) {
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
              <MyDocument profileState={profileState} />
            </PDFViewer>
          )}
        </div>
      </div>
    </div>
  );
}

export default Preview;
