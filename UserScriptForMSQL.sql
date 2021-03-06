USE [API]
GO
/****** Object:  Table [dbo].[UserDetail]    Script Date: 24-05-2022 21:50:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserDetail](
	[RowID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[UserId] [varchar](50) NULL,
	[Password] [text] NULL,
	[Address] [varchar](max) NULL,
 CONSTRAINT [PK_UserDetail] PRIMARY KEY CLUSTERED 
(
	[RowID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[UserDetail] ON 

INSERT [dbo].[UserDetail] ([RowID], [Name], [LastName], [UserId], [Password], [Address]) VALUES (2, N'User 0', N'Sabkhan', N'User0@gmail.com', N'$2b$10$siHDP.YAbAItJS/MR83Yxurwc4MMEn5VlK5joFK5PdfuzwnoGoKtu', N'Pune')
INSERT [dbo].[UserDetail] ([RowID], [Name], [LastName], [UserId], [Password], [Address]) VALUES (3, N'User 2', N'Sabkhan', N'User2@gmail.com', N'$2b$10$/2nnL4QnbZlCHXOFce/1GOTDm4rYP3WTOyZTAMtjcZ.deAM6R1Hx6', N'Pune')
INSERT [dbo].[UserDetail] ([RowID], [Name], [LastName], [UserId], [Password], [Address]) VALUES (4, N'User 3', N'Sabkhan', N'User3@gmail.com', N'$2b$10$BmyvVJdjQZwMjK9Zfq0BVuHxtgmSC9fi4tqeyGreQfgm7pJTehk.m', N'Pune')
INSERT [dbo].[UserDetail] ([RowID], [Name], [LastName], [UserId], [Password], [Address]) VALUES (5, N'User 4', N'Sabkhan', N'User4@gmail.com', N'$2b$10$6ZIkhM0.0etcw1CZ3W1EXu3hncOcojGteuM8SC4Z0fxC8Mo1pkLqa', N'Pune')
INSERT [dbo].[UserDetail] ([RowID], [Name], [LastName], [UserId], [Password], [Address]) VALUES (6, N'User 5', N'Sabkhan', N'User5@gmail.com', N'$2b$10$82iDpqd9IYZzMtAnDE9SD.tbk3bLeSRdxqRn3MHuZrvawl4YWDbou', N'Pune')
INSERT [dbo].[UserDetail] ([RowID], [Name], [LastName], [UserId], [Password], [Address]) VALUES (7, N'User 6', N'Sabkhan', N'User6@gmail.com', N'$2b$10$3/aQVebE8Xs4znAKTzPLL.dXdd.vBOHrioEcVGWBFGxwDFI4IleGO', N'Pune')
INSERT [dbo].[UserDetail] ([RowID], [Name], [LastName], [UserId], [Password], [Address]) VALUES (8, N'User 7', N'Sabkhan', N'User7@gmail.com', N'$2b$10$mLzYWq.ivzfSob7lF4m5CeEyuCFEw2HJE94QfoMvwttYrrZAM549K', N'Pune')
INSERT [dbo].[UserDetail] ([RowID], [Name], [LastName], [UserId], [Password], [Address]) VALUES (9, N'User 8', N'Sabkhan', N'User8@gmail.com', N'$2b$10$uHV/CEorOnvQsz/h4l17h.hTUnHKqxH.oxKJ6F60d7JT9vjmcEXl6', N'Pune')
INSERT [dbo].[UserDetail] ([RowID], [Name], [LastName], [UserId], [Password], [Address]) VALUES (10, N'User 9', N'Sabkhan', N'User9@gmail.com', N'$2b$10$bXi7geiT1raWtFShJNr9CewUcm.bHe8bVeGQJGukVSgCt7THgADQe', N'Pune')
INSERT [dbo].[UserDetail] ([RowID], [Name], [LastName], [UserId], [Password], [Address]) VALUES (11, N'User 10', N'Sabkhan', N'User10@gmail.com', N'$2b$10$BgN3IHpYhUD51Rd2xmNvTOqit3k7Lw9rK52ELmL1H0JNrGLJbNFcO', N'Pune')
INSERT [dbo].[UserDetail] ([RowID], [Name], [LastName], [UserId], [Password], [Address]) VALUES (12, N'User 12', N'User', N'User12@gmail.com', N'$2b$10$EhxWo12852cw0W5SBNCJZuhsqyu9A9WT.EybKRgqAxtb5TLy5.XPG', N'Pune')
INSERT [dbo].[UserDetail] ([RowID], [Name], [LastName], [UserId], [Password], [Address]) VALUES (13, N'User 13', N'User', N'User13@gmail.com', N'$2b$10$s/bic78zOpMObiaL9T74Z.FwE/rbMibND/dJVsSknYtPLHbw49b8K', N'Pune')
SET IDENTITY_INSERT [dbo].[UserDetail] OFF
