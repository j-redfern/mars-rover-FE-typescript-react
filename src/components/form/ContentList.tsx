interface ContentList {
    title: string,
    placeholder: string,
    id: string,
}
export const contentList: ContentList[] = [
    { title: "Enter size of plateau ", placeholder: "For example min,max -> 0,10 ", id: "plateau" },
    { title: "Enter starting point co-ordinates  ", placeholder: "For example x,y -> 0,0 ", id: "start-point" },
    { title: "Enter a facing direction ", placeholder: "For example N,S,E or W (North, South, East, West) ", id: "direction" },
    { title: "Enter a list of moving commands ", placeholder: "For example F,B,L,R (forward, back, left, right) ", id: "commands" },
];

export default ContentList


