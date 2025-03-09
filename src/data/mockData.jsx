import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    access: "admin",
    age: 35,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    access: "manager",
    age: 29,
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    phone: "555-123-4567",
    access: "user",
    age: 41,
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phone: "444-987-6543",
    access: "user",
    age: 33,
  },
  {
    id: 5,
    name: "William Brown",
    email: "william.brown@example.com",
    phone: "333-222-1111",
    access: "manager",
    age: 38,
  },
  {
    id: 6,
    name: "Olivia Wilson",
    email: "olivia.wilson@example.com",
    phone: "222-333-4444",
    access: "user",
    age: 27,
  },
  {
    id: 7,
    name: "Liam Martinez",
    email: "liam.martinez@example.com",
    phone: "111-222-3333",
    access: "admin",
    age: 36,
  },
  {
    id: 8,
    name: "Sophia Anderson",
    email: "sophia.anderson@example.com",
    phone: "666-777-8888",
    access: "user",
    age: 31,
  },
  {
    id: 9,
    name: "James Taylor",
    email: "james.taylor@example.com",
    phone: "999-888-7777",
    access: "manager",
    age: 42,
  },
  {
    id: 10,
    name: "Ava Thomas",
    email: "ava.thomas@example.com",
    phone: "555-666-7777",
    access: "user",
    age: 26,
  },
];

export const MockDataContacts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  phone: `123-456-78${String(i).padStart(2, "0")}`,
  address: `${i + 1} Main St, Anytown, USA`,
  age: Math.floor(Math.random() * 40) + 20,
  city: "Elbab",
  zipCode: `100${i % 10}`,
  registerId: Math.floor(100000 + Math.random() * 900000),
}));

export const MockDataInvoices = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  phone: `123-456-${String(i + 10).padStart(4, "0")}`, // تحسين تنسيق رقم الهاتف
  address: `Street ${i + 1}, City ${i % 5 === 0 ? "New York" : "Los Angeles"}`,
  cost: (Math.random() * 900 + 100).toFixed(2), // توليد تكاليف بين 100 و1000
  date: new Date(Date.now() - i * 86400000).toISOString().split("T")[0], // تنسيق التاريخ YYYY-MM-DD
}));

export const mockBarData = [
  {
    country: "USA",
    "hot dog": 100,
    burger: 150,
    sandwich: 200,
    kebab: 180,
    fries: 160,
    donut: 140,
  },
  {
    country: "Canada",
    "hot dog": 120,
    burger: 130,
    sandwich: 180,
    kebab: 170,
    fries: 150,
    donut: 130,
  },
  {
    country: "Germany",
    "hot dog": 90,
    burger: 110,
    sandwich: 140,
    kebab: 160,
    fries: 170,
    donut: 120,
  },
  {
    country: "France",
    "hot dog": 80,
    burger: 140,
    sandwich: 160,
    kebab: 150,
    fries: 180,
    donut: 110,
  },
  {
    country: "Japan",
    "hot dog": 110,
    burger: 120,
    sandwich: 130,
    kebab: 140,
    fries: 150,
    donut: 100,
  },
  {
    country: "Australia",
    "hot dog": 130,
    burger: 140,
    sandwich: 150,
    kebab: 160,
    fries: 170,
    donut: 180,
  },
];

export const mockPieData = [
  {
    id: "java",
    label: "java",
    value: 279,
    color: "hsl(111, 70%, 50%)",
  },
  {
    id: "hack",
    label: "hack",
    value: 236,
    color: "hsl(276, 70%, 50%)",
  },
  {
    id: "ruby",
    label: "ruby",
    value: 108,
    color: "hsl(358, 70%, 50%)",
  },
  {
    id: "erlang",
    label: "erlang",
    value: 242,
    color: "hsl(119, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 268,
    color: "hsl(304, 70%, 50%)",
  },
];
export const mockLineData = [
  {
    id: "japan",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "plane",
        y: 245,
      },
      {
        x: "helicopter",
        y: 300,
      },
      {
        x: "boat",
        y: 6,
      },
      {
        x: "train",
        y: 19,
      },
      {
        x: "subway",
        y: 3,
      },
      {
        x: "bus",
        y: 150,
      },
      {
        x: "car",
        y: 128,
      },
      {
        x: "moto",
        y: 227,
      },
      {
        x: "bicycle",
        y: 168,
      },
      {
        x: "horse",
        y: 83,
      },
      {
        x: "skateboard",
        y: 26,
      },
      {
        x: "others",
        y: 282,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(30, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 279,
      },
      {
        x: "helicopter",
        y: 79,
      },
      {
        x: "boat",
        y: 144,
      },
      {
        x: "train",
        y: 292,
      },
      {
        x: "subway",
        y: 107,
      },
      {
        x: "bus",
        y: 139,
      },
      {
        x: "car",
        y: 222,
      },
      {
        x: "moto",
        y: 215,
      },
      {
        x: "bicycle",
        y: 270,
      },
      {
        x: "horse",
        y: 210,
      },
      {
        x: "skateboard",
        y: 138,
      },
      {
        x: "others",
        y: 99,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(114, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 194,
      },
      {
        x: "helicopter",
        y: 271,
      },
      {
        x: "boat",
        y: 134,
      },
      {
        x: "train",
        y: 38,
      },
      {
        x: "subway",
        y: 236,
      },
      {
        x: "bus",
        y: 246,
      },
      {
        x: "car",
        y: 55,
      },
      {
        x: "moto",
        y: 61,
      },
      {
        x: "bicycle",
        y: 295,
      },
      {
        x: "horse",
        y: 130,
      },
      {
        x: "skateboard",
        y: 166,
      },
      {
        x: "others",
        y: 276,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(242, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 185,
      },
      {
        x: "helicopter",
        y: 270,
      },
      {
        x: "boat",
        y: 153,
      },
      {
        x: "train",
        y: 58,
      },
      {
        x: "subway",
        y: 47,
      },
      {
        x: "bus",
        y: 161,
      },
      {
        x: "car",
        y: 96,
      },
      {
        x: "moto",
        y: 236,
      },
      {
        x: "bicycle",
        y: 57,
      },
      {
        x: "horse",
        y: 186,
      },
      {
        x: "skateboard",
        y: 124,
      },
      {
        x: "others",
        y: 115,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(213, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 199,
      },
      {
        x: "helicopter",
        y: 188,
      },
      {
        x: "boat",
        y: 90,
      },
      {
        x: "train",
        y: 0,
      },
      {
        x: "subway",
        y: 179,
      },
      {
        x: "bus",
        y: 156,
      },
      {
        x: "car",
        y: 172,
      },
      {
        x: "moto",
        y: 298,
      },
      {
        x: "bicycle",
        y: 166,
      },
      {
        x: "horse",
        y: 178,
      },
      {
        x: "skateboard",
        y: 228,
      },
      {
        x: "others",
        y: 233,
      },
    ],
  },
];
export const mockGeoData = [
  {
    "id": "AFG",
    "value": 424012
  },
  {
    "id": "AGO",
    "value": 35217
  },
  {
    "id": "ALB",
    "value": 51963
  },
  {
    "id": "ARE",
    "value": 97429
  },
  {
    "id": "ARG",
    "value": 852545
  },
  {
    "id": "ARM",
    "value": 128345
  },
  {
    "id": "ATA",
    "value": 287398
  },
  {
    "id": "ATF",
    "value": 146593
  },
  {
    "id": "AUT",
    "value": 625163
  },
  {
    "id": "AZE",
    "value": 204377
  },
  {
    "id": "BDI",
    "value": 277848
  },
  {
    "id": "BEL",
    "value": 641886
  },
  {
    "id": "BEN",
    "value": 1043
  },
  {
    "id": "BFA",
    "value": 162485
  },
  {
    "id": "BGD",
    "value": 470473
  },
  {
    "id": "BGR",
    "value": 299795
  },
  {
    "id": "BHS",
    "value": 356557
  },
  {
    "id": "BIH",
    "value": 368804
  },
  {
    "id": "BLR",
    "value": 512840
  },
  {
    "id": "BLZ",
    "value": 861890
  },
  {
    "id": "BOL",
    "value": 290097
  },
  {
    "id": "BRN",
    "value": 721844
  },
  {
    "id": "BTN",
    "value": 315330
  },
  {
    "id": "BWA",
    "value": 367671
  },
  {
    "id": "CAF",
    "value": 767377
  },
  {
    "id": "CAN",
    "value": 823104
  },
  {
    "id": "CHE",
    "value": 535895
  },
  {
    "id": "CHL",
    "value": 156218
  },
  {
    "id": "CHN",
    "value": 599085
  },
  {
    "id": "CIV",
    "value": 634364
  },
  {
    "id": "CMR",
    "value": 261855
  },
  {
    "id": "COG",
    "value": 668677
  },
  {
    "id": "COL",
    "value": 560798
  },
  {
    "id": "CRI",
    "value": 672970
  },
  {
    "id": "CUB",
    "value": 513046
  },
  {
    "id": "-99",
    "value": 819919
  },
  {
    "id": "CYP",
    "value": 996774
  },
  {
    "id": "CZE",
    "value": 887592
  },
  {
    "id": "DEU",
    "value": 71007
  },
  {
    "id": "DJI",
    "value": 123823
  },
  {
    "id": "DNK",
    "value": 900829
  },
  {
    "id": "DOM",
    "value": 811693
  },
  {
    "id": "DZA",
    "value": 36678
  },
  {
    "id": "ECU",
    "value": 349997
  },
  {
    "id": "EGY",
    "value": 346637
  },
  {
    "id": "ERI",
    "value": 33263
  },
  {
    "id": "ESP",
    "value": 824119
  },
  {
    "id": "EST",
    "value": 335418
  },
  {
    "id": "ETH",
    "value": 559114
  },
  {
    "id": "FIN",
    "value": 240991
  },
  {
    "id": "FJI",
    "value": 783231
  },
  {
    "id": "FLK",
    "value": 233169
  },
  {
    "id": "FRA",
    "value": 158992
  },
  {
    "id": "GAB",
    "value": 914195
  },
  {
    "id": "GBR",
    "value": 644110
  },
  {
    "id": "GEO",
    "value": 194021
  },
  {
    "id": "GHA",
    "value": 696095
  },
  {
    "id": "GIN",
    "value": 69023
  },
  {
    "id": "GMB",
    "value": 161117
  },
  {
    "id": "GNB",
    "value": 646342
  },
  {
    "id": "GNQ",
    "value": 296698
  },
  {
    "id": "GRC",
    "value": 583283
  },
  {
    "id": "GTM",
    "value": 848992
  },
  {
    "id": "GUY",
    "value": 604723
  },
  {
    "id": "HND",
    "value": 369163
  },
  {
    "id": "HRV",
    "value": 366660
  },
  {
    "id": "HTI",
    "value": 91136
  },
  {
    "id": "HUN",
    "value": 631244
  },
  {
    "id": "IDN",
    "value": 687137
  },
  {
    "id": "IND",
    "value": 823698
  },
  {
    "id": "IRL",
    "value": 480645
  },
  {
    "id": "IRN",
    "value": 406124
  },
  {
    "id": "IRQ",
    "value": 117287
  },
  {
    "id": "ISL",
    "value": 918229
  },
  {
    "id": "ISR",
    "value": 87355
  },
  {
    "id": "ITA",
    "value": 162861
  },
  {
    "id": "JAM",
    "value": 296033
  },
  {
    "id": "JOR",
    "value": 6983
  },
  {
    "id": "JPN",
    "value": 142462
  },
  {
    "id": "KAZ",
    "value": 561861
  },
  {
    "id": "KEN",
    "value": 305936
  },
  {
    "id": "KGZ",
    "value": 265171
  },
  {
    "id": "KHM",
    "value": 778889
  },
  {
    "id": "OSA",
    "value": 768828
  },
  {
    "id": "KWT",
    "value": 1912
  },
  {
    "id": "LAO",
    "value": 781260
  },
  {
    "id": "LBN",
    "value": 347649
  },
  {
    "id": "LBR",
    "value": 679670
  },
  {
    "id": "LBY",
    "value": 220648
  },
  {
    "id": "LKA",
    "value": 419623
  },
  {
    "id": "LSO",
    "value": 336819
  },
  {
    "id": "LTU",
    "value": 833126
  },
  {
    "id": "LUX",
    "value": 271510
  },
  {
    "id": "LVA",
    "value": 537714
  },
  {
    "id": "MAR",
    "value": 773648
  },
  {
    "id": "MDA",
    "value": 286169
  },
  {
    "id": "MDG",
    "value": 113236
  },
  {
    "id": "MEX",
    "value": 90885
  },
  {
    "id": "MKD",
    "value": 538563
  },
  {
    "id": "MLI",
    "value": 637936
  },
  {
    "id": "MMR",
    "value": 199061
  },
  {
    "id": "MNE",
    "value": 866340
  },
  {
    "id": "MNG",
    "value": 505139
  },
  {
    "id": "MOZ",
    "value": 808368
  },
  {
    "id": "MRT",
    "value": 951297
  },
  {
    "id": "MWI",
    "value": 931292
  },
  {
    "id": "MYS",
    "value": 676001
  },
  {
    "id": "NAM",
    "value": 111091
  },
  {
    "id": "NCL",
    "value": 729419
  },
  {
    "id": "NER",
    "value": 305655
  },
  {
    "id": "NGA",
    "value": 237105
  },
  {
    "id": "NIC",
    "value": 483022
  },
  {
    "id": "NLD",
    "value": 628255
  },
  {
    "id": "NOR",
    "value": 476958
  },
  {
    "id": "NPL",
    "value": 911398
  },
  {
    "id": "NZL",
    "value": 124918
  },
  {
    "id": "OMN",
    "value": 20016
  },
  {
    "id": "PAK",
    "value": 788963
  },
  {
    "id": "PAN",
    "value": 58062
  },
  {
    "id": "PER",
    "value": 179212
  },
  {
    "id": "PHL",
    "value": 888380
  },
  {
    "id": "PNG",
    "value": 792864
  },
  {
    "id": "POL",
    "value": 10318
  },
  {
    "id": "PRI",
    "value": 146297
  },
  {
    "id": "PRT",
    "value": 122204
  },
  {
    "id": "PRY",
    "value": 346329
  },
  {
    "id": "QAT",
    "value": 157635
  },
  {
    "id": "ROU",
    "value": 8575
  },
  {
    "id": "RUS",
    "value": 743977
  },
  {
    "id": "RWA",
    "value": 442708
  },
  {
    "id": "ESH",
    "value": 848721
  },
  {
    "id": "SAU",
    "value": 693860
  },
  {
    "id": "SDN",
    "value": 335225
  },
  {
    "id": "SDS",
    "value": 252943
  },
  {
    "id": "SEN",
    "value": 8292
  },
  {
    "id": "SLB",
    "value": 78335
  },
  {
    "id": "SLE",
    "value": 718689
  },
  {
    "id": "SLV",
    "value": 589921
  },
  {
    "id": "ABV",
    "value": 867718
  },
  {
    "id": "SOM",
    "value": 519732
  },
  {
    "id": "SRB",
    "value": 691007
  },
  {
    "id": "SUR",
    "value": 19886
  },
  {
    "id": "SVK",
    "value": 261121
  },
  {
    "id": "SVN",
    "value": 193165
  },
  {
    "id": "SWZ",
    "value": 725854
  },
  {
    "id": "SYR",
    "value": 560256
  },
  {
    "id": "TCD",
    "value": 278849
  },
  {
    "id": "TGO",
    "value": 512673
  },
  {
    "id": "THA",
    "value": 756634
  },
  {
    "id": "TJK",
    "value": 648227
  },
  {
    "id": "TKM",
    "value": 947031
  },
  {
    "id": "TLS",
    "value": 632134
  },
  {
    "id": "TTO",
    "value": 617067
  },
  {
    "id": "TUN",
    "value": 102171
  },
  {
    "id": "TUR",
    "value": 709359
  },
  {
    "id": "TWN",
    "value": 753636
  },
  {
    "id": "TZA",
    "value": 6671
  },
  {
    "id": "UGA",
    "value": 80050
  },
  {
    "id": "UKR",
    "value": 129978
  },
  {
    "id": "URY",
    "value": 10464
  },
  {
    "id": "USA",
    "value": 59514
  },
  {
    "id": "UZB",
    "value": 307107
  },
  {
    "id": "VEN",
    "value": 439373
  },
  {
    "id": "VNM",
    "value": 695458
  },
  {
    "id": "VUT",
    "value": 958426
  },
  {
    "id": "PSE",
    "value": 409623
  },
  {
    "id": "YEM",
    "value": 248584
  },
  {
    "id": "ZAF",
    "value": 781338
  },
  {
    "id": "ZMB",
    "value": 791059
  },
  {
    "id": "ZWE",
    "value": 966897
  },
  {
    "id": "KOR",
    "value": 229559
  }
]
export const mockTransactions =[
  {
    "id": "1001",
    "user": "John Doe",
    "cost": 250.75,
    "date": "2025-03-01"
  },
  {
    "id": "1002",
    "user": "Jane Smith",
    "cost": 130.50,
    "date": "2025-03-02"
  },
  {
    "id": "1003",
    "user": "Michael Brown",
    "cost": 500.00,
    "date": "2025-03-03"
  },
  {
    "id": "1004",
    "user": "Emma Johnson",
    "cost": 80.25,
    "date": "2025-03-04"
  },
  {
    "id": "1004",
    "user": "Emma Johnson",
    "cost": 80.25,
    "date": "2025-03-04"
  }
]
