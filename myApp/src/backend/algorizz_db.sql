-- test

CREATE TABLE "User"
(
	Username VARCHAR(20) NOT NULL,
    [Password] VARCHAR(30) NOT NULL,
	Email VARCHAR(60) PRIMARY KEY NOT NULL,
	Active BIT NULL, -- Possible feature where you can add friends and see active users
	Phone VARCHAR(15) NULL --Can use this for 2FA in the future
)
