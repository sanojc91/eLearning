import * as actionTypes from "./actionTypes";
//import axios from "../../axios";

export const fetchCoursesStart = () => {
  return {
    type: actionTypes.FETCH_COURSES_START,
  };
};

export const fetchCoursesSuccess = (courseList) => {
  return {
    type: actionTypes.FETCH_COURSES_SUCCESS,
    courseList: courseList,
  };
};

export const fetchCoursesFail = (error) => {
  return {
    type: actionTypes.FETCH_COURSES_FAIL,
    error: error,
  };
};
{
  /*
export const fetchCourses = (courseType, group, keyWord) => {
  return (dispatch) => {
    dispatch(fetchCoursesStart());
    if (group === undefined) {
      group = "GP08";
    }
    let url = `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${courseType}&MaNhom=${group}`;
    if (courseType === "all") {
      url = `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${group}`;
    }
    if (keyWord) {
      url = `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${keyWord}&MaNhom=${group}`;
    }

    axios
      .get(url)
      .then((response) => {
        // console.log("Courses List: ", response.data);
        dispatch(fetchCoursesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCoursesFail(error));
      });
  };
};
*/
}