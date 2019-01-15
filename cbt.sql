-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 15, 2019 at 02:09 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.1.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cbt`
--

-- --------------------------------------------------------

--
-- Table structure for table `exams`
--

CREATE TABLE `exams` (
  `id` int(11) NOT NULL,
  `user_id` int(10) NOT NULL,
  `subject1` varchar(100) NOT NULL,
  `subject2` varchar(100) NOT NULL,
  `subject3` varchar(100) NOT NULL,
  `subject4` varchar(100) NOT NULL,
  `total` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `exams`
--

INSERT INTO `exams` (`id`, `user_id`, `subject1`, `subject2`, `subject3`, `subject4`, `total`) VALUES
(1, 2, 'English-75', 'Mathematics-75', 'Chemistry-38', 'Physics-75', '14th Jan, 2019 10:56:am'),
(2, 1, 'English-75', 'Mathematics-75', 'Chemistry-39', 'Physics-75', '14th Jan, 2019 10:46:am'),
(3, 1, 'English-75', 'Mathematics-75', 'Chemistry-75', 'Physics-75', '14th Jan, 2019 11:56:am');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `subject_id` int(6) NOT NULL,
  `question` text NOT NULL,
  `a` text NOT NULL,
  `b` text NOT NULL,
  `c` text NOT NULL,
  `d` text NOT NULL,
  `answer` varchar(10) NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `subject_id`, `question`, `a`, `b`, `c`, `d`, `answer`, `photo`) VALUES
(1, 3, 'Which of the following species determines the chemical properties of an atom?', 'Electron', 'Neutron', 'Nucleus', 'Proton', 'C', ''),
(2, 3, 'The following glasswares are used to measure the volume of liquid except_______________.', 'Graduated beaker', 'Pipette', 'Test tube', 'Burette', 'C', ''),
(3, 3, 'pauli exclusion principle is related to .......................................', 'quality of electrons in the valence shell', 'Filling the orlbitals with lower energy first', 'The filling the generated orbitals', 'Quantum numbers of electrons', 'D', ''),
(5, 3, 'The seperation of oxygen from netrogen by fractional distillation of air is possible because........................', 'Netrogen is less dense than  oxygen ', 'oxygen is more reactive than nitrogen', 'of the difference in their boiling point', 'they belong to the same priod', 'C', ''),
(6, 3, 'The purity of a solid sample can  best be determined by its ...................', 'Boiling point', 'Melting point ', 'conductivity', 'solubility', 'A', ''),
(7, 3, 'Atomic orbital is?  ', 'The circular path through which electrons revolve round the nucleus', 'A region around nucleus where electrons are most likely to be found', 'The path around the nucleus through which protons move', 'The path around the nucleus through which electron move', 'B', ''),
(8, 3, 'The property of element which increases down a group of the periodic table is ?', 'Electronegativity ', 'Electron affinity  ', 'Ionic radius ', 'Ionization enegy', 'C', ''),
(9, 3, 'The reason for the decreases in the atomic size of element across a period is that ', 'Nuclear charge increases while the outermost electrons are drawn closer to the nucleus', 'Nuclear charge decreases while the outermost electrons are drawn closer to the nucleus', 'Valence electron  increase the period  while the valence shell remains constant ', 'Nucleus change decreases while the distance of the valence shell from the necleus is increasing', 'A', ''),
(10, 3, 'The ionization energy is affected  by the  following factors except ', 'Distance of the outermost electron (s) from the necleus', 'Size of positive nuclear charge ', 'Ability to attract shared electron(s)', 'Screening effect of the inner electron(s)', 'C', ''),
(11, 3, 'Which of the following statement is correct ? ', 'Covalent  compound would readily ionize in solution ', 'Covalent  compound consist of ions ', 'Hydrogen bond is formed between a metal and a non_metal ', 'Ionic compounds in solution would conduct electricity', 'D', ''),
(12, 3, 'The properties of a good primary standard include the following except ', 'High molecular mass', 'Low molecular mass', 'High degree of purity', 'Readily available', 'A', ''),
(13, 3, 'The use of Diamond in abrasive is due to it s', 'High melting point', 'Hardness ', 'Octahedral shape the ', 'Durability', 'B', ''),
(14, 3, ' Which of the following statement about ergy is high ', 'Activation energy is high', 'Acatalyst is required  ', 'It occurs reversible', 'Heat energy is obsorbed ', 'D', ''),
(15, 3, '     Graphite and diamond are similar in that they ', 'Have octahedral shape ', 'Have same density', 'Form carbon (iv) oxide on combustion', 'Conduct electricity', 'C', ''),
(16, 5, 'the northern and southern protectorates were  made provinces under the? ', 'Macpherson constitution', 'Richards constitution', 'Clifford constitution', 'Lyttleton constitution', 'B', ''),
(17, 5, 'The legal right to exercise power in a state is refereed to as  ', 'Authority', 'Svereignty', 'Coercion', 'Influence', 'A', ''),
(18, 5, 'The primary reason for the establishment of political parties is to --------------', 'Attain political power', 'Protect political interest', 'Make laws', 'Lobby the government', 'C', ''),
(19, 5, 'The head of government under the 1979 constitution is the ', 'Prisident ', 'Prime minister', 'Speaker House of Representatives', 'Senate prisident.', 'A', ''),
(20, 5, 'A system of government in which an individual rules with absolute power is---------', 'Theocracy ', 'Democracy', 'Autocracy', 'Aristocracy', 'C', ''),
(21, 5, 'One of the demerits of the privatization of public corporations in Nigeria?', 'Scarcity of goods and services', 'Higher cost of goods and services', 'Creation of unemployment ', 'Inefficient services delivery', 'B', ''),
(22, 5, 'In which of the following does the state have absolute control of all aspects of citizens&#39; life?', 'Autocracy', 'Democracy', 'Communalism', 'Totalitarianism.', 'D', ''),
(23, 5, 'Early nationalist activities manifested in the form of ', 'Discrimination ', 'Resistance', 'participation', 'Disagreement.', 'B', ''),
(24, 5, 'One major merit of the unitary system of government is that it ', 'Is most democratic', 'Is cheaper to operate', 'Eradicates corruption', 'Eliminates tyranny.', 'B', ''),
(25, 5, 'Successive pouplation figures have been contested in Nigeria because of', 'Gender consideration', 'Religious Consideration', 'Geographical disparity', 'Political considaration', 'D', ''),
(26, 5, 'One of the major sources of a constitution is ------------', 'Party system', 'Conventions', 'Political structure', 'political party.', 'D', ''),
(27, 5, 'Absence of a charter has been a problem of', 'ECOWAS', 'UNO', 'OAU', 'Commonwealth', 'D', ''),
(28, 5, 'One of the duties and obligations of the state to the citizens is---------------', 'Loyalty', 'Payment of wagea', 'protection of property', 'Assistance', 'C', ''),
(29, 5, 'The appointment and dissolution of the state to the citizens is------', 'Ministerial contrl', 'legislative control', 'political  control', 'Judicial control', 'A', ''),
(30, 5, 'Which of the following is a process of military disengagement from Nigeria politics?', 'Increase in minitary budget', 'Conduct of free and fair elections.', 'Appointment of army officer into political post', 'Strengthening the army', 'B', ''),
(31, 5, 'Which of the following is an advantage of presidential system of government ?', 'Checks and balances.', 'Absence of of opposition.', 'Cost effectiveness', 'Less tapism.', 'A', ''),
(32, 5, 'The chairman of the 1976 Constitution  Drafting committee was ', 'Udo Udoma  ', 'ademola Adetokunbo', 'Rotimi williams', 'Niki Tobi.', 'A', ''),
(33, 5, 'The totality of Nigeria&#39;s participation in the international system is known as', 'International polycy', 'Foreign policy', 'Economic policy', 'Social policy', 'B', ''),
(34, 5, 'The organ of the UN that served as custodian of some African Countries prior to their independence is ', 'The international court of justice', 'the security council', 'the trusteeship council', 'the general assebly', 'B', ''),
(35, 5, 'Grants received by the local government councils in nigeria are from', 'national revenue allocation commission', 'federal and state governments ', 'federal government only', 'state government only', 'B', ''),
(36, 5, 'Disputes among member states of ECOWAS are settled by ', 'The technical and specialized commission', 'Board of trustees', 'The community tribunal ', 'The council of the ministers', 'A', ''),
(37, 5, 'Ensuring the appointment into federal establishments in Nigeria reflect geographical spread is the sole function of the _________________?', 'Revenue Mobilization and Fiscal Allocation Commission', 'Civil Service Commission', 'Federal Character Commission ', 'Public Complain Commission ', 'C', ''),
(38, 5, 'A major difference between a pressure  group and political party is that whereas the latter aims at winning power the _________________?', 'Executive Government policies', 'Aims at winning election', 'Influencing Government Policies', 'Nominates potentials leaders for government', 'C', ''),
(39, 5, 'The Quorum in the OPEC conference is formed with the attendance of ________________?', 'One third of member states', 'Half of  member states', 'Members states', 'Three quarter of member states ', 'A', ''),
(40, 5, 'The characteristic of civil service which prevent it officials from addressing the press unless directed is know as _________________?', 'Impertiality', 'Neutrality', 'Anonymity', 'Impersonality', 'C', ''),
(41, 5, 'Which of the following emphasizes the rule of law and human rights protection?', 'Constitionalism ', 'Delegated legislation ', 'Decentralization ', 'Centralization', 'A', ''),
(42, 5, 'The needs of the citizens are made know to the government throught_____________?', 'Judiciary', 'Political praty', 'Civil service', 'Public opinion', 'D', ''),
(43, 5, 'The tenet of non-alignment connotes ', 'Political interaction', 'Political neutrality ', 'Political instability ', 'Political non-participation ', 'B', ''),
(44, 5, 'Smaller parties have little chance of winning election in a', 'Alternative voting system', 'proportional representation system', 'Absolute majority system', 'Pluralist system', 'B', ''),
(45, 5, 'The head of palace in the pre-colonial Hausa system is', 'Sarkin dawaki', 'Sarkin gida', 'Sarkin fada', 'Sarkin ruwa', 'C', ''),
(46, 5, 'The main function of the legislature is', 'Law reviewing', 'Law making ', 'law implementation', 'Law interpretation', 'B', ''),
(47, 5, 'One of the demerits of 1979 constitution in Nigeria was that of', 'Concentration of power at the center', 'Impeachment procedure', 'Separation of powers', 'Cost of governance', 'D', ''),
(48, 5, 'A major function of monarchy is that it is', 'Headed by a king', 'Based on hereditary', 'Headed by a queen', 'Headed by a richest citizen ', 'B', ''),
(49, 5, 'New partnership for Africa&#39;s Development was an attempt to overcome', 'a civil war in Africa', 'diseases in Africa', 'obstacle to Africa development  ', 'coups in Africation', 'C', ''),
(50, 5, 'One important agent of political socialization in the ', 'political structure', 'political party', 'party constitution', 'electoral college ', 'B', ''),
(51, 5, 'Bye laws are made by the', 'Juditiciary', 'Legislature', 'Media', 'Executive', 'D', ''),
(52, 5, 'In the AU, which of the following organs prepares agenda for meetings?', 'The council of ministers ', 'general secretariat', 'The liberation committee', 'The assembly of Heads of the State and Government', 'A', ''),
(53, 5, 'Which of these is an economic programme designed by military?', 'National Youth Service Corp', 'War Against Indiscipline', 'Directorate of food,road and rural infracture', 'Mass mobilization for social justice', 'C', ''),
(54, 11, 'From the above report, which of the following is the major consequence of the intervention programme?', 'Increases in self-reliance skills', 'Promotion of inter-communal relation', 'Provision of infrastructural facilities', 'Acceleration of national development', 'A', 'http://localhost/questions/images/online_cbt_05_25_171544891117.jpg'),
(55, 11, 'From the above report, a probable reason for the initial high crime rate in Aikara community was', 'poor upbringing', 'corruption', 'abject poverty', 'greed', 'C', 'http://localhost/questions/images/online_cbt_05_30_081544891408.jpg'),
(56, 11, 'One of the functions of local government is ', 'sttlement of intra-party crisis', 'making of bye-laws', 'formulation of monetary policies', 'delimitation of constituencies', 'B', ''),
(57, 7, 'From the table above the average product of the 3rd unit of labour is ', '50', '70', '350', '150', 'A', 'http://localhost/questions/images/online_cbt_05_35_441544891744.png'),
(58, 11, 'A body established and entrusted with power and authority to direct the affairs of a state is called', 'Federal Executive Council', 'State Legislative Council', 'trusteeship', 'government', 'D', ''),
(59, 7, 'Which of the following is an indicator of economic growth?', 'High tax rate', 'Technology development', 'High gross domestic product', 'High interest rate', 'B', ''),
(60, 11, 'Which of the following can guarantee adherence to the rule of law?', 'Political immunity', 'Political gerrymandering', 'National development', 'Representative democracy ', 'D', ''),
(61, 7, 'Which of the following budgets will increase government expenditure?', 'Zero base budget', 'Surplus budget', 'Deficit budget', 'Balance budget', 'C', ''),
(62, 7, 'Inflationary trend in an economy will negatively affect,majorly', 'debtors.', 'creditors.', 'the business class.', 'flexible income earners.', 'B', ''),
(63, 7, 'which of the following is not a source of government revenue?', 'Grants aids and borrowing.', 'taxes, fees, license and fines.', 'interest, dividends, profits and earnings.', 'personal income,disposable income and transfer earnings.', 'D', ''),
(64, 11, 'According to 1999 Constitution, sovereignty resides in the ', 'Commander in chief of the armed forces', 'People who confer legitimacy on elected leaders', 'National Assembly which has power to make laws and amend the constitution', 'military which can declare  any law null, and avoid of no effect', 'B', ''),
(65, 7, 'One of the reasons why Nigeria is a mono-economy is because of her.', 'huge volume of petroleum activities in the country .', 'diversified system of economic activities .', 'high demand for foreign commodities.', 'high rate of unemployment.', 'A', ''),
(66, 11, 'In a democratic government, franchise is given to all', 'party mambers', 'resident adults', 'adult citizens', 'opinion leaders', 'C', ''),
(67, 2, 'The bowed shape of the production possibilities curve illustrates', 'that production is inefficient ', 'the demand is relatively inelastic', 'that production is unattainable ', 'the law of increasing marginal cost', 'D', ''),
(68, 11, 'A significant companion of the rule of low is the', 'fusion of legislative and executive functions', 'supremacy of the ordinary law', 'adaptation of one party system', 'enforcement of law by the legislature', 'B', ''),
(69, 11, 'Operation of the rule of law could be undermined by the', 'existence of civil society groups', 'existence of free press ', 'establishment of administrative tribunals', 'encouragement of effective opposition', 'C', ''),
(70, 7, 'A firm owned and managed by a family is an example of?', 'joint stock exchange', 'sole proprietorship', 'cooperateive society', 'partnership ', 'B', ''),
(71, 11, 'the above dialogue shows that democracy could result into', 'inefficiency', 'corruption', 'absolute liberty', 'high cost of governance', 'C', 'http://localhost/questions/images/online_cbt_07_21_411545330101.jpg'),
(72, 11, 'it could be inferred from the dialogue above that democracy encourages', 'tolerance ', 'development', 'job creation', 'delegated legislaton', 'A', ''),
(73, 11, 'it could be inferred from the dialogue above that democracy encourages', 'tolerance ', 'development', 'job creation', 'delegated legislaton', 'A', ''),
(74, 11, 'The most suitable form of democracy for a small village or community is', 'constitutional democracy', 'indirect democracy', 'communal democracy', 'direct democracy', 'D', ''),
(75, 11, 'Which of the following is not a major reason for political aparty ?', 'political violence', 'unfulfilled political promises', 'bad government', 'cross carpeting phemenon', 'D', ''),
(76, 11, 'The chapter IV of the 1999 constitution of Nigeria is about', 'composition of the National Assembly ', 'fundamental human rights', 'procedures for the impeachment of the president', 'formation of quorum in the senate', 'B', ''),
(77, 11, 'Which of the following may prevent a citizens from voting in a general election ?', 'lack of stable income', 'high cost of living ', 'non=registeration', 'political neutrality', 'C', ''),
(78, 11, 'An organized group that is independent of the state could be described as', 'civil defence', 'pressure group', 'community group', 'civil society', 'B', ''),
(79, 11, 'The smooth operation of the public service in Nigeria is being hampered by', 'dept burden', 'adequate training', 'privatization policy', 'bribery and corruption', 'D', ''),
(80, 11, 'The public service can perform all these functions except', 'advise government on policy formulation', 'keeping of government records ', 'provision of social services', 'budget approval for implementation', 'D', ''),
(81, 11, 'The highest class in the public service in Nigeria is the', 'clerical', 'manipulative', 'technical', 'administrative', 'D', ''),
(82, 7, 'Determine the level of a nation&#39;s national income if government expenditure is N15, investment is N20, consumption is N25, output is N10,  import 8 and MPC=0.82', 'N284', 'N62', 'N120', 'N344.', 'D', ''),
(83, 7, 'One of the major cause of farmer&#39;s unstable income in Nigeria is', 'The effect of diseases and pests', 'Industrial pollution ', 'Mining and extraction activities ', 'Population growth.', 'A', ''),
(84, 7, 'A partnership sourcing for funds to expand it&#39;s business would approach', 'A central bank', 'A money market', 'An insurance company', 'A stock exchange.', 'D', ''),
(85, 7, 'Excess supply over demand will place a price advantage on', 'Government', 'Foreign investors', 'Suppliers', 'Consumers.', 'D', ''),
(86, 7, 'Which of the  following institution operate in the money market?', 'Central Bank', 'Mortgage banks', 'Money deposit banks.', 'Insurance companies.', 'A', ''),
(87, 7, 'The national income of a country can be measured by using', 'Output method', 'Economic solution ', 'Working population ', 'level of industrialization.', 'A', ''),
(88, 7, 'Given a consumption function C=10+0.6y, determine the value of CifYis20 ', '36.60', '22.00', '30.60', '26.00', 'B', ''),
(89, 7, 'The population theory that is concerned with the cases of over population and shortage of food production is', 'Population density ', 'Malthusian population theory ', 'National population theory', 'Demographic transition theory', 'B', ''),
(90, 7, 'The modal  value of 3,8,4,6,3,5,2,7,3and 5 is ', '6', '3', '4', '5', 'B', ''),
(91, 7, 'Which of factors of production in inelastic?', 'Land and labour. ', 'Capital. ', 'Labour.', 'land', 'D', ''),
(92, 7, 'The production within domestic territory of a country is called the ', 'Net national product', 'Gross domestic product', 'Net income', 'Disposable income', 'B', ''),
(93, 7, 'A well conducted census is important for', 'Distribution of educational materials in the cities', 'Revenue genaration ', 'Economic planing ', 'Providing economic opportunities in the rural areas', 'C', ''),
(94, 7, 'The economic questions about what and how to produce in an economy is solely answered by the', 'Government ', 'Labour union', 'Privite and poblic enterprise', 'System of economy practiced', 'D', ''),
(95, 7, 'The basic principle of  cooperative societies  is to ', 'Maintain the integrity of their members', 'Protect the interests and pursue the welfare of members', 'Ensure better working conditions for members', 'Provide voluntary serivces to the members', 'B', ''),
(96, 7, 'The main aim of Economic Community of West African States is the', 'Discouragement of trade among member states', 'Encouragement of revolts against former colonial masters ', 'Establishment of it&#39;s headquarters in each members states.', 'Liberalization of trade among member states.', 'D', ''),
(97, 1, 'What are nouns?', 'Nouns are name.', 'Nouns are words used to express emotions.', 'Nouns are action words.', 'Nouns are computer words.', 'A', ''),
(98, 1, 'Find the name of a continent in the following photo', 'Google', 'Africa', 'Scholarship', 'Challenge', 'A', '');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `name`) VALUES
(1, 'English'),
(2, 'Mathematics'),
(3, 'Chemistry'),
(4, 'Physics'),
(5, 'Biology'),
(6, 'Economics'),
(7, 'Geography'),
(8, 'Fishery'),
(9, 'Government');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(20) NOT NULL DEFAULT 'student'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `role`) VALUES
(1, 'Umar Farooq', '23432343HD', NULL, 'student'),
(2, 'John Smith', 'admin', '5f4dcc3b5aa765d61d8327deb882cf99', 'admin'),
(3, 'Sani Musa', '98987654GF', NULL, 'student'),
(4, 'Steve Rogers', '87654345HD', NULL, 'student'),
(5, 'James Bond', '8657439HD', NULL, 'student');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `exams`
--
ALTER TABLE `exams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `exams`
--
ALTER TABLE `exams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
