import React, { useState } from "react";
import "./Blogs.scss";

const Blogs = () => {
  const [id, setId] = useState("");
  const [anh, setAnh] = useState("");
  const [ten, setTen] = useState("");
  const [moTa, setMoTa] = useState("");
  const [list, setList] = useState([]);
  const [formNhap, setFormNhap] = useState(false);
  const [formSua, setFormSua] = useState(false);
  const [hienThi, setHienThi] = useState(true);

  const handleLuuNhap = (e) => {
    e.preventDefault();
    const newItem = { id, anh, ten, moTa };
    setList([...list, newItem]);
    setId("");
    setAnh("");
    setTen("");
    setMoTa("");
    setFormNhap(false);
    setHienThi(true);
  };
  const handleLuuSua = (e) => {
    e.preventDefault();
    const newItem = { id, anh, ten, moTa };
    // list[index] = newItem;
    setId("");
    setAnh("");
    setTen("");
    setMoTa("");
    setFormSua(false);
    setHienThi(true);
  };
  const handleThem = () => {
    setFormNhap(true);
    setHienThi(false);
  };
  const handleXoa = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };
  const handleSua = (index) => {
    setFormSua(true);
    setHienThi(false);
    setId(index.id);
    setAnh(index.anh);
    setName(index.ten);
    setMoTa(index.moTa);
    const newItem = { id, anh, ten, moTa };
    list[index] = newItem;
  };
  // const handleLuu = () => {};
  return (
    <div>
      {hienThi && (
        <div>
          <h1>Quản lý blogs</h1>
          <button onClick={handleThem}>Thêm mới</button>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Ảnh</th>
                <th>Tên blogs</th>
                <th>Mô tả</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, key) => (
                <tr key={key}>
                  <td>{item.id}</td>
                  <td>{item.anh && <img src={item.anh}></img>}</td>
                  <td>{item.ten}</td>
                  <td>{item.moTa}</td>
                  <td className="flex">
                    <button
                      onClick={() => {
                        handleXoa(key);
                      }}
                    >
                      Xóa
                    </button>
                    <button onClick={() => handleSua(key)}>Sửa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {formNhap && (
        <div className="formNhap">
          <h1>Nhap thong tin blog</h1>
          <form>
            <input
              type="text"
              placeholder="Nhap id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <br />
            <input
              type="file"
              value={anh}
              onChange={(e) => setAnh(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Nhap ten"
              value={ten}
              onChange={(e) => setTen(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Nhap mo ta"
              value={moTa}
              onChange={(e) => setMoTa(e.target.value)}
            />
            <br />
          </form>
          <button onClick={handleLuuNhap}>Luu</button>
        </div>
      )}
      {formSua && (
        <div className="formNhap">
          <h1>Sua thong tin blog</h1>
          <form>
            <input
              type="text"
              placeholder="Nhap id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <br />
            <input
              type="file"
              value={anh}
              onChange={(e) => setAnh(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Nhap ten"
              value={ten}
              onChange={(e) => setTen(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Nhap mo ta"
              value={moTa}
              onChange={(e) => setMoTa(e.target.value)}
            />
            <br />
          </form>
          <button onClick={handleLuuSua}>Luu</button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
