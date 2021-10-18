const config = require("../config/config");
import AsyncStorage from "@react-native-community/async-storage"
const HOST = config.host;
const API = config.api;

const InstituteLogin = (payload) => {
  const loginUrl = `${HOST}/${API}/auth/student-login`;
  // const testUrl = `${HOST}/${API}/test`;

  return fetch(loginUrl, {
    method: "post",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.token) {
        let bearer = "Bearer " + data.token;
        console.log("storing token");
       AsyncStorage.setItem("token", bearer);
        if (data.user) {
          let userString = JSON.stringify(data.user);
         AsyncStorage.setItem("user", userString);
          if (data.institute) {
            let instituteString = JSON.stringify(data.institute);
           AsyncStorage.setItem("institute", instituteString);
          }
          if (data.student) {
            let studentString = JSON.stringify(data.student);
           AsyncStorage.setItem("student", studentString);
            return {
              success: true,
              user: data.user,
              student: data.student,
              institute: data.institute,
            };
          } else {
            return { success: false, message: data.message };
          }
        }
      } else {
        return { success: false, message: data.message };
      }

      let userString = JSON.stringify(data.user);
     AsyncStorage.setItem("user", userString);
      return data;
    })
    .catch((e) => {
      return { success: false, message: e.message };
    });
};

module.exports.InstituteLogin = InstituteLogin;

const logout = () => {
 AsyncStorage.removeItem("user");
 AsyncStorage.removeItem("student");
 AsyncStorage.removeItem("token");
};
module.exports.logout = logout;

const getInstituteDetails = (iname) => {
  const iurl = `${HOST}/${API}/institute/uname/${iname}`;
  return fetch(iurl, {
    headers: {
      Authorization:AsyncStorage.getItem("token"),
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return { success: true, instituteInfo: data };
    })
    .catch((e) => {
      return { success: false, error: e.message };
    });
};
module.exports.getInstituteDetails = getInstituteDetails;

const createStudent = (payload) => {
  const addStudentUrl = `${HOST}/${API}/auth/add-student`;

  return fetch(addStudentUrl, {
    method: "post",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:AsyncStorage.getItem("token"),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.student) {
        console.log(data);
        return { success: true, data };
      } else {
        return { success: false, message: "something went wrong" };
      }
    })
    .catch((e) => {
      return { success: false, error: e.message };
    });
};
module.exports.createStudent = createStudent;

const getClassRooms = (instituteId) => {
  const url = `${HOST}/${API}/classroom/all-in/${instituteId}`;
  let options = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:AsyncStorage.getItem("token"),
    },
  };

  return fetch(url, options).then((res) => {
    return res.json();
  });
};
module.exports.getClassRooms = getClassRooms;

const getClassRoomsSubjects = (instituteId) => {
  const url = `${HOST}/${API}/classroom/all-subject-by-institute/${instituteId}`;
  let options = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:AsyncStorage.getItem("token"),
    },
  };

  return fetch(url, options).then((res) => {
    return res.json();
  });
};
module.exports.getClassRoomsSubjects = getClassRoomsSubjects;

const getSubjectsByClassroomId = (classroomId) => {
  const url = `${HOST}/${API}/classroom-subject/all-subjects-by-classroom/${classroomId}`;
  let options = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:AsyncStorage.getItem("token"),
    },
  };
  return fetch(url, options).then((res) => {
    return res.json();
  });
};
module.exports.getSubjectsByClassroomId = getSubjectsByClassroomId;

const getStudentData = (type) => {
  const url = `${HOST}/${API}/student/all-in/${this.institute.id}`;
  
  return fetch(url).then((res) => {
    return res.json();
  });
};
module.exports.getStudentData = getStudentData;

const getClassesByClassroom =async (classroomId) => {
  const url = `${HOST}/${API}/class/classroom/${classroomId}`; //all-in/${this.institute.id}`

  return fetch(url, {
    headers: {
      Authorization:await AsyncStorage.getItem("token"),
    },
  }).then((res) => {
    return res.json();
  });
};
module.exports.getClassesByClassroom = getClassesByClassroom;

const getAllStudentsOfClassroom = async (classroomId) => {
  const url = `${HOST}/${API}/classroom/all-students/${classroomId}`; //all-in/${this.institute.id}`
  return fetch(url, {
    headers: {
      Authorization:await AsyncStorage.getItem("token"),
    },
  }).then((res) => {
    return res.json();
  });
};
module.exports.getAllStudentsOfClassroom = getAllStudentsOfClassroom;

const getClasses = () => {
  const url = `${HOST}/${API}/class`; //all-in/${this.institute.id}`
  return fetch(url, {
    headers: {
      Authorization:AsyncStorage.getItem("token"),
    },
  }).then((res) => {
    return res.json();
  });
};
module.exports.getClasses = getClasses;

const sendResetEmailLink = (payload) => {  
  const url = `${HOST}/${API}/auth/send-reset-password-link-student`;
  console.log(payload);  
  return fetch(url, {
    method: "post",
    body: JSON.stringify( payload),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",      
    },
  })
    .then((res) => {
      return res.json();
    });
};
module.exports.sendResetEmailLink = sendResetEmailLink;

const resetPassword = (payload, jwt) => {  
  const url = `${HOST}/${API}/auth/reset-password`;
  console.log(payload);  
  return fetch(url, {
    method: "post",
    body: JSON.stringify( payload),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: jwt,
    },
  })
    .then((res) => {
      return res.json();
    });
};
module.exports.resetPassword = resetPassword;

const addActivityLog = (payload) => {
  const url = `${HOST}/${API}/activity-log/add-activity-log`;
  console.log(payload);

  return fetch(url, {
    method: "post",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:AsyncStorage.getItem("token"),
    },
  }).then((res) => {
    return res.json();
  });
};
module.exports.addActivityLog = addActivityLog;

const getAllActivityLogByStudentId = (studentId) => {
  const url = `${HOST}/${API}/activity-log/get-activity-by-student/${studentId}`;

  return fetch(url, {
    headers: {
      Authorization:AsyncStorage.getItem("token"),
    },
  }).then((res) => {
    return res.json();
  });
};
module.exports.getAllActivityLogByStudentId = getAllActivityLogByStudentId;

const getDashboardData = (studentId) => {
  const url = `${HOST}/${API}/student/student-dashboard-data/${studentId}`;

  return fetch(url, {
    headers: {
      Authorization:AsyncStorage.getItem("token"),
    },
  }).then((res) => {
    return res.json();
  });
};
module.exports.getDashboardData = getDashboardData;

const uploadProfileImageByStudentId = (payload) => {
  const uploadProfileUrl = `${HOST}/${API}/users/upload-profile`;

  return fetch(uploadProfileUrl, {
    method: "post",
    body: payload,
    headers: {
      // "Content-type": "multipart/form-data",
      //    'Accept': 'application/json',
      Authorization:AsyncStorage.getItem("token"),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((res) => {
    return res.json();
  });
};
module.exports.uploadProfileImageByStudentId = uploadProfileImageByStudentId;

const getUserInfoByUserId = (userId) => {
  const url = `${HOST}/${API}/users/user-info/${userId}`; 
  return fetch(url, {
    headers: {
      Authorization:AsyncStorage.getItem("token"),
    },
  }).then((res) => {
    return res.json();
  });
};
module.exports.getUserInfoByUserId = getUserInfoByUserId;

const getNextLectureStudentId = (studentId) => {
  const url = `${HOST}/${API}/student/all-lecture-student/${studentId}`;
  
  return fetch(url, {
    headers: {
      Authorization:AsyncStorage.getItem("token"),
    },
  }).then((res) => {
    return res.json();
  });
};
module.exports.getNextLectureStudentId = getNextLectureStudentId;

const getSubjectByStudentId = (studentId) => {
  const url = `${HOST}/${API}/student-subject/get-subjects/${studentId}`;
  
  return fetch(url, {
    headers: {
      Authorization:AsyncStorage.getItem("token"),
    },
  }).then((res) => {
    return res.json();
  });
};
module.exports.getSubjectByStudentId = getSubjectByStudentId;

const getAttendancePerSubject = (studentId) => {
  const url = `${HOST}/${API}/student/attendance-per-subject/${studentId}`;
  
  return fetch(url, {
    headers: {
      Authorization:AsyncStorage.getItem("token"),
    },
  }).then((res) => {
    return res.json();
  });
};
module.exports.getAttendancePerSubject = getAttendancePerSubject;

const getAttendanceByStudentId = (studentId) => {
  const url = `${HOST}/${API}/student/student-attendance/${studentId}`;
  
  return fetch(url, {
    headers: {
      Authorization:AsyncStorage.getItem("token"),
    },
  }).then((res) => {
    return res.json();
  });
};
module.exports.getAttendanceByStudentId = getAttendanceByStudentId;

const getAllAnnouncementByInstituteId = (instituteId) => {
  const url = `${HOST}/${API}/notice-post/all-institute/${instituteId}`;
  
  return fetch(url, {
    headers: {
      Authorization:AsyncStorage.getItem("token"),
    },
  }).then((res) => {
    return res.json();
  });
};
module.exports.getAllAnnouncementByInstituteId = getAllAnnouncementByInstituteId;

const getQuizAttendanceByStudentId = (studentId) => {
  const url = `${HOST}/${API}/student/student-quiz-attendance/${studentId}`;
  
  return fetch(url, {
    headers: {
      Authorization:AsyncStorage.getItem("token"),
    },
  }).then((res) => {
    return res.json();
  });
};
module.exports.getQuizAttendanceByStudentId = getQuizAttendanceByStudentId;

const getClassmatesPercentageByStudentId = (studentId, classroomId) => {
  const url = `${HOST}/${API}/student/subjects-classmates-percentage/${studentId}/${classroomId}`;
 
  return fetch(url, {
    headers: {
      Authorization:AsyncStorage.getItem("token"),
    },
  }).then((res) => {
    return res.json();
  });
};
module.exports.getClassmatesPercentageByStudentId = getClassmatesPercentageByStudentId;
