CREATE DATABASE database_03_kieuduytung;

CREATE TABLE KHACH_HANG (
  id varchar(50)  PRIMARY KEY,
  name varchar(50) NOT NULL,
  address varchar(100) NOT NULL,
  phone varchar(15) NOT NULL
);

CREATE TABLE PHONG (
  id varchar(50) PRIMARY KEY,
  LoaiPhong varchar(50) NOT NULL,
  SoKhachToiDa integer NOT NULL,
  GiaPhong FLOAT,
  Mota varchar(150)
);


CREATE TABLE DAT_PHONG (
  id varchar(50) PRIMARY KEY,
  id_Phong varchar(50),
  id_KhachHang varchar(50),
  NgayDat date,
  created_at time,
  updated_at time,
  TienDatCoc FLOAT,
  Ghichu varchar(100),
  TrangThaiDat varchar(50)
);

CREATE TABLE CHI_TIET_SU_DUNG_DICH_VU (
  id_DatPhong varchar(50),
  id_DV varchar(50),
  SoLuong integer,
  PRIMARY KEY (id_DatPhong, id_DV)
);

CREATE TABLE DICH_VU_DI_KEM (
  id varchar(50) PRIMARY KEY,
  name varchar(50) NOT NULL,
  DonViTinh varchar(50) NOT NULL,
  DonGia float NOT NULL
);

ALTER TABLE DAT_PHONG ADD FOREIGN KEY (id_Phong) REFERENCES PHONG (id);

ALTER TABLE DAT_PHONG ADD FOREIGN KEY (id_KhachHang) REFERENCES KHACH_HANG (id);

alter table CHI_TIET_SU_DUNG_DICH_VU ADD FOREIGN KEY (id_DV) REFERENCES DICH_VU_DI_KEM (id);

ALTER TABLE CHI_TIET_SU_DUNG_DICH_VU ADD FOREIGN KEY (id_DatPhong) REFERENCES DAT_PHONG (id);


INSERT INTO PHONG (id, LoaiPhong, SoKhachToiDa,GiaPhong)
VALUES
  ('P0001', 'Loai 1', 20,60.000),
  ('P0002', 'Loai 1', 25,80.000),		
  ('P0003', 'Loai 2', 15,50.000),
  ('P0004', 'Loai 3', 20,50.000)

INSERT INTO KHACH_HANG (id, name, address, phone) 
VALUES 	('KH0001', 'Nguyen Van A', 'Hoa xuan', '5551234'),
		('KH0002', 'Nguyen Van B', 'Hoa hai', '3331234'),
		('KH0003', 'Phan Van A', 'Cam le', '7771234'),
		('KH0004', 'Phan Van B', 'Hoa xuan', '2221234');

INSERT INTO DICH_VU_DI_KEM (id, name, DonViTinh, DonGia) 
VALUES ('DV0001', 'Beer', 'lon', 10.000),
       ('DV0002', 'Nuoc ngot', 'lon', 8.000),
       ('DV0003', 'Trai cay', 'dia', 35.000),
       ('DV0004', 'Khan uot', 'cai', 2.000);
	   
INSERT INTO DAT_PHONG (id, id_Phong, id_KhachHang, NgayDat, created_at, updated_at, TienDatCoc, TrangThaiDat) 
VALUES ('DP0001', 'P0001', 'KH0002', '2018-06-08', '12:00:00', '13:30:00', 100.000, 'Da dat'),
       ('DP0002', 'P0001', 'KH0003', '2018-04-01', '14:00:00', '19:15:00', 50.000, 'Da huy'),
       ('DP0003', 'P0002', 'KH0002', '2018-05-01', '20:30:00', '22:15:00', 100.000, 'Da dat'),
       ('DP0004', 'P0003', 'KH0001', '2018-06-01', '19:30:00', '22:15:00', 200.000, 'Da dat');

INSERT INTO CHI_TIET_SU_DUNG_DICH_VU (id_DatPhong, id_DV, SoLuong) 
VALUES ('DP0001', 'DV0001', 20),
       ('DP0001', 'DV0003', 3),
       ('DP0001', 'DV0002', 10),
       ('DP0002', 'DV0002', 10),
       ('DP0002', 'DV0003', 1),
       ('DP0003', 'DV0003', 2),
       ('DP0003', 'DV0004', 10);
	   
	   
select 
	DAT_PHONG.id as MaDatPhong,
	DAT_PHONG.id_Phong as MaPhong,
	PHONG.LoaiPhong,
	PHONG.GiaPhong,
	KHACH_HANG.name as TenKH,
	DAT_PHONG.NgayDat,
	sum(PHONG.GiaPhong * EXTRACT(HOUR FROM (DAT_PHONG.updated_at - DAT_PHONG.created_at))) as TongTienHat,
-- 	sum(CHI_TIET_SU_DUNG_DICH_VU.SoLuong * DICH_VU_DI_KEM.DonGia) as TongTienSuDungDichVu
-- 	sum(TongTienHat + sum(TongTienSuDungDichVu)) as TongTienThanhToan;
from DAT_PHONG
join PHONG on DAT_PHONG.id_Phong = PHONG.id
join KHACH_HANG on DAT_PHONG.id_KhachHang = KHACH_HANG.id
group by DAT_PHONG.id, PHONG.LoaiPhong,PHONG.GiaPhong,KHACH_HANG.name,DAT_PHONG.NgayDat
	

--câu 2

select KHACH_HANG.*
from KHACH_HANG
where KHACH_HANG.address = 'Hoa xuan';

--câu 3

select 
	PHONG.id as MaPhong,
    PHONG.LoaiPhong,
    PHONG.SoKhachToiDa,
    PHONG.GiaPhong,
    COUNT(DAT_PHONG.id_KhachHang) as SoLanDat
from PHONG
join DAT_PHONG on PHONG.id = DAT_PHONG.id_Phong
where
    DAT_PHONG.TrangThaiDat = 'Da dat'
group by
    PHONG.id,
    PHONG.LoaiPhong,
    PHONG.SoKhachToiDa,
    PHONG.GiaPhong
having
    count(DAT_PHONG.id_KhachHang) > 2;
	
	
	