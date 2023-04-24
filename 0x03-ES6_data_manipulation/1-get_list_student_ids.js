export default function getListStudentIds(idx) {
  if (Array.isArray(idx)) {
    return idx.map((items) => items.id);
  }
  return [];
}
