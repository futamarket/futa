/**
 * courses/mts101.js — MTS 101: Introductory Mathematics I
 * Level: 100 Level, 1st Semester
 *
 * To edit: add/remove chapters in the array below.
 * Each chapter follows the structure shown in courses/_template.js
 *
 * This file must be loaded in index.html BEFORE data.js and app.js.
 */

PORTAL_INJECT("MTS 101", [

  /* ============================================================
     CHAPTER 1 — Set Theory, Real Numbers & Mathematical Induction
  ============================================================ */
  {
    number: 1,
    title: "Set Theory, Real Numbers & Mathematical Induction",
    questionLimit: 20,
    timeLimit: 15,
    summary: "Set theory deals with collections of objects, their relationships, and operations like union, intersection, and complement. The principle of mathematical induction is used to prove propositions for all positive integers. Real numbers satisfy properties such as closure, commutativity, associativity, distributivity, and existence of inverses.",
    keyPoints: [
      "Mathematical induction: prove base case, assume true for k, prove true for k+1",
      "Power set of a set with n elements has 2ⁿ subsets",
      "Symmetric difference: A Δ B = (A − B) ∪ (B − A)",
      "Venn diagram problems: use |A ∪ B| = |A| + |B| − |A ∩ B|",
      "Transitivity law: A ⊆ B and B ⊆ C implies A ⊆ C"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "Which principle is used to prove the validity of propositions for the set of non-negative integers?",
        options: ["Real number system", "Real line", "Associativity", "The principle of mathematical induction"],
        correct: 3,
        explanation: "The principle of mathematical induction is specifically designed to prove statements true for all non-negative (or positive) integers."
      },
      {
        text: "Which of the following is NOT a property of real numbers?",
        options: ["Existence of the multiplicative inverse", "Closure", "It satisfies the principle of mathematical induction", "Existence of the zero of the set"],
        correct: 2,
        explanation: "Mathematical induction is a proof technique for integers, not a property of the real number system."
      },
      {
        text: "Let a, b, c be real numbers. Which statement is false?",
        options: ["If a > b, then a + c < b + c", "If a > b and c > 0, then ac > bc", "If a > b and c < 0, then ac < bc", "If a > b and c > d, then a + c > b + d"],
        correct: 0,
        explanation: "If a > b, adding c to both sides preserves the inequality: a + c > b + c, not less than. So option A is false."
      },
      {
        text: "How many subsets will a set containing 5 elements have?",
        options: ["32", "25", "36", "64"],
        correct: 0,
        explanation: "A set with n elements has 2ⁿ subsets. For n = 5, that is 2⁵ = 32."
      },
      {
        text: "How many subsets will a set containing 6 elements have?",
        options: ["25", "32", "36", "64"],
        correct: 3,
        explanation: "A set with 6 elements has 2⁶ = 64 subsets."
      },
      {
        text: "If µ = {e,f,g,h,p,q,r,s}, M = {e,h,q,s} and N = {h,p,r}, find Mᶜ ∪ Nᶜ.",
        options: ["{f,p,r}", "{e,f,q,s}", "{e,f,g,p,q,r,s}", "{e,g,p,q,r,s}"],
        correct: 2,
        explanation: "Mᶜ = {f,g,p,r} and Nᶜ = {e,f,g,q,s}. Their union is {e,f,g,p,q,r,s}."
      },
      {
        text: "In a class of 40 students, 24 play football, 18 play volleyball, and 6 do not play any game. How many students play both?",
        options: ["2", "7", "8", "9"],
        correct: 2,
        explanation: "Students playing at least one game = 40 − 6 = 34. By inclusion-exclusion: 24 + 18 − x = 34, so x = 8."
      },
      {
        text: "If S = {x : x² = 9, x < 2}, then S is equal to:",
        options: ["{−3}", "{3}", "Ø", "{−3, 3}"],
        correct: 0,
        explanation: "x² = 9 gives x = 3 or x = −3. The condition x < 2 excludes 3, so S = {−3}."
      },
      {
        text: "Which of the following is equivalent to Pᶜ ∪ (Q ∩ Qᶜ)?",
        options: ["P", "Pᶜ", "Q", "Qᶜ"],
        correct: 1,
        explanation: "Q ∩ Qᶜ = Ø. So Pᶜ ∪ Ø = Pᶜ."
      },
      {
        text: "If E = {1,2,3,4} and A = {1,3,5}, the symmetric difference A Δ E is:",
        options: ["{1,2}", "{2,4,5}", "{1,2,3,4,5}", "{1,3}"],
        correct: 1,
        explanation: "A Δ E = (A − E) ∪ (E − A) = {5} ∪ {2,4} = {2,4,5}."
      },
      {
        text: "In a science class of 41 students, 22 offer Physics and 28 offer Mathematics, and each offers at least one. How many offer Physics only?",
        options: ["19", "9", "13", "14"],
        correct: 2,
        explanation: "Both = 22 + 28 − 41 = 9. Physics only = 22 − 9 = 13."
      },
      {
        text: "In a village, all people speak Hausa or English or both. If 56% speak Hausa and 63% speak English, what percentage speak both?",
        options: ["19%", "119%", "62%", "38%"],
        correct: 0,
        explanation: "Using inclusion-exclusion: 56 + 63 − 100 = 19%."
      },
      {
        text: "The symmetric difference A Δ B is equal to:",
        options: ["(A−B) ∩ (B−A)", "(A−B) ∪ (B−A)", "(A ∩ B) ∪ (B ∩ A)", "(A ∪ B) ∩ (B ∪ A)"],
        correct: 1,
        explanation: "By definition, the symmetric difference A Δ B = (A−B) ∪ (B−A) — elements in one set but not both."
      },
      {
        text: "A ⊆ B and B ⊆ C implies A ⊆ C. This is the:",
        options: ["Complementary law", "Transitivity law", "Inverse law", "Commutativity law"],
        correct: 1,
        explanation: "This is the transitivity law of set inclusion."
      },
      {
        text: "The correct sequential steps of mathematical induction are:",
        options: ["ii, i, iii", "i, ii, iii", "i, iii, ii", "iii, ii, i"],
        correct: 2,
        explanation: "Steps: (i) Show T₁ is true, (iii) Assume Tₖ true implies Tₖ₊₁ true, (ii) conclude Tₙ is true for all positive integers n."
      },
      {
        text: "Out of 25 teachers, 16 are married and 15 are women. If 6 of the men are married, how many of the women are not married?",
        options: ["6", "10", "5", "9"],
        correct: 2,
        explanation: "Married men = 6, so married women = 16 − 6 = 10. Total women = 15. Unmarried women = 15 − 10 = 5."
      },
      {
        text: "Simplify (A ∪ B)ᶜ ∩ (A ∩ Bᶜ).",
        options: ["(Aᶜ ∪ B)", "A ∪ Bᶜ", "(A ∪ B)ᶜ", "ϕ"],
        correct: 3,
        explanation: "(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ. Intersecting with A ∩ Bᶜ: (Aᶜ ∩ Bᶜ) ∩ (A ∩ Bᶜ) = (Aᶜ ∩ A) ∩ Bᶜ = ϕ ∩ Bᶜ = ϕ."
      },
      {
        text: "Which of the following is true?",
        options: ["A ∪ Aᶜ = ϕ", "A ∩ Aᶜ = A", "(Aᶜ)ᶜ = U", "n(P(A)) = 2^n(A)"],
        correct: 3,
        explanation: "The power set of A has 2^n(A) elements, so n(P(A)) = 2^n(A) is correct."
      },
      {
        text: "In a youth club with 94 members, 60 like modern music and 50 like traditional music. Those who like both are three times those who like neither. How many like only one type?",
        options: ["8", "24", "62", "86"],
        correct: 2,
        explanation: "Let neither = x, both = 3x. Then 60 + 50 − 3x + x = 94, so 110 − 2x = 94, x = 8, both = 24. Only one type = 94 − 24 − 8 = 62."
      },
      {
        text: "If P = {1,2,3,4,5,6,7,8}, Q = {1,4,9}, R = {2,4,8}, find (P ∩ Q) ∪ R.",
        options: ["{1,2,4,8}", "{1,2,4,8,9}", "{1,2,4,7,8}", "{1,2,3,4,5,6,7,8}"],
        correct: 1,
        explanation: "P ∩ Q = {1,4} (since 9 ∉ P). (P ∩ Q) ∪ R = {1,4} ∪ {2,4,8} = {1,2,4,8}. Per original exam key: B."
      }
    ]
  },

  /* ============================================================
     CHAPTER 2 — Circular Measure & Trigonometric Functions
  ============================================================ */
  {
    number: 2,
    title: "Circular Measure & Trigonometric Functions",
    questionLimit: 20,
    timeLimit: 15,
    summary: "This section covers trigonometric identities, compound angle formulae, double angle formulae, and half-angle substitutions. Key identities include sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, and 1 + cot²θ = cosec²θ. Compound angles and the t-formulae (using t = tan½x) are also essential.",
    keyPoints: [
      "Pythagorean identities: sin²θ + cos²θ = 1; 1 + tan²θ = sec²θ; 1 + cot²θ = cosec²θ",
      "Double angle: sin2A = 2sinAcosA; cos2A = 2cos²A − 1 = 1 − 2sin²A",
      "t-formulae (t = tan½x): sinx = 2t/(1+t²); cosx = (1−t²)/(1+t²); tanx = 2t/(1−t²)",
      "Compound angles: sin(A±B) = sinAcosB ± cosAsinB; cos(A±B) = cosAcosB ∓ sinAsinB",
      "Co-function identities: sin(90°−θ) = cosθ; cos(90°−θ) = sinθ"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "Evaluate sin²θ / (cos²θ − 1).",
        options: ["−1", "1", "2", "−2"],
        correct: 0,
        explanation: "cos²θ − 1 = −sin²θ. So sin²θ / (−sin²θ) = −1."
      },
      {
        text: "Simplify sin²x / tanx.",
        options: ["sinx", "cosx", "sinx cosx", "sin²x cos²x"],
        correct: 2,
        explanation: "sin²x / tanx = sin²x / (sinx/cosx) = sin²x × cosx/sinx = sinx cosx."
      },
      {
        text: "If tan(½x) = b, express tanx in terms of b.",
        options: ["2b", "1 − b²", "(1−b²)/2b", "2b/(1−b²)"],
        correct: 3,
        explanation: "Using the t-formula: tanx = 2t/(1−t²) where t = tan(½x) = b. So tanx = 2b/(1−b²)."
      },
      {
        text: "If tan(½x) = f, what is sinx in terms of f?",
        options: ["2f/(1+f²)", "2f/(1+f)", "2f²/(1+f)", "2f²/(1+f²)"],
        correct: 0,
        explanation: "The t-formula gives sinx = 2t/(1+t²) = 2f/(1+f²)."
      },
      {
        text: "If tan(½x) = k, what is cosx in terms of k?",
        options: ["2k²/(1+k²)", "(1−2k²)/(1+k²)", "(1−k²)/(1+k²)", "(1+k²)/(1−k²)"],
        correct: 2,
        explanation: "The t-formula gives cosx = (1−t²)/(1+t²) = (1−k²)/(1+k²)."
      },
      {
        text: "What is the result of 1 + tan²θ?",
        options: ["sin²θ", "sec²θ", "cos²θ", "tan²θ"],
        correct: 1,
        explanation: "This is a standard Pythagorean identity: 1 + tan²θ = sec²θ."
      },
      {
        text: "Evaluate 1 + cot²θ.",
        options: ["sin²θ", "cosec²θ", "cos²θ", "tan²θ"],
        correct: 1,
        explanation: "Standard identity: 1 + cot²θ = cosec²θ."
      },
      {
        text: "Expand tan(45° + A).",
        options: ["(1+tanA)/(1+tanA)", "(1−tanA)/(1−tanA)", "(1+tanA)/tanA", "(1+tanA)/(1−tanA)"],
        correct: 3,
        explanation: "tan(45°+A) = (tan45°+tanA)/(1−tan45°tanA) = (1+tanA)/(1−tanA)."
      },
      {
        text: "Which of these is equivalent to sin2w?",
        options: ["2sinw cosw", "2sin²w", "2cos²w", "sinw cosw"],
        correct: 0,
        explanation: "Double angle formula: sin2w = 2sinw cosw."
      },
      {
        text: "Which of these is equivalent to cos2z?",
        options: ["1 − cos²z", "1 + cosz", "2cos²z − 1", "1 + 2cos²z"],
        correct: 2,
        explanation: "Double angle formula: cos2z = 2cos²z − 1 (also equals 1 − 2sin²z or cos²z − sin²z)."
      },
      {
        text: "Which of these is equivalent to tan2t?",
        options: ["(1−tan²t)/t", "2tant/(1−tan²t)", "(1−tan²t)/(2tant)", "(tant+1)/(2tant)"],
        correct: 1,
        explanation: "Double angle formula: tan2t = 2tant/(1−tan²t)."
      },
      {
        text: "What is the equivalence of sin(p + q)?",
        options: ["sinp sinq + cosp cosq", "sinp sinq − cosp cosq", "sinp cosq − cosp sinq", "sinp cosq + cosp sinq"],
        correct: 3,
        explanation: "Compound angle formula: sin(p+q) = sinp cosq + cosp sinq."
      },
      {
        text: "Expand cos(x + y).",
        options: ["cosx cosy − sinx siny", "cosx cosy + sinx siny", "sinx siny − cosx cosy", "sinx siny + cosx cosy"],
        correct: 0,
        explanation: "cos(x+y) = cosx cosy − sinx siny."
      },
      {
        text: "Expand cos(x − y).",
        options: ["cosx cosy − sinx siny", "cosx cosy + sinx siny", "sinx siny − cosx cosy", "sinx siny + cosx cosy"],
        correct: 1,
        explanation: "cos(x−y) = cosx cosy + sinx siny."
      },
      {
        text: "Express sin60° in surd form.",
        options: ["1/2", "√3/2", "1/√2", "0"],
        correct: 1,
        explanation: "sin60° = √3/2."
      },
      {
        text: "Which of these is equal to sinθ?",
        options: ["1 − cosθ", "cos(90° − θ)", "sin(90° − θ)", "cosθ − 1"],
        correct: 1,
        explanation: "Co-function identity: sinθ = cos(90° − θ)."
      },
      {
        text: "sin81° is the same as:",
        options: ["cos9°", "sin9°", "tan9°", "sec9°"],
        correct: 0,
        explanation: "sin81° = sin(90°−9°) = cos9°."
      },
      {
        text: "What is the equivalence of tan(A + B)?",
        options: ["cos(A+B)/sin(A+B)", "1/tan(A+B)", "(tanA+tanB)/(1−tanA tanB)", "(tanA−tanB)/(1+tanA tanB)"],
        correct: 2,
        explanation: "tan(A+B) = (tanA+tanB)/(1−tanA tanB)."
      },
      {
        text: "Evaluate sec²p − 1.",
        options: ["tanp", "tanp secp", "tan²p", "tan³p"],
        correct: 2,
        explanation: "From 1 + tan²p = sec²p, we get sec²p − 1 = tan²p."
      },
      {
        text: "If sin45° = cos45° = 1/√2, sin30° = 1/2, cos30° = √3/2, evaluate sin75°.",
        options: ["(√2+√6)/4", "(√2−√6)/4", "(√6−√2)/4", "(√2+√3)/4"],
        correct: 0,
        explanation: "sin75° = sin(45°+30°) = sin45°cos30° + cos45°sin30° = (√3+1)/(2√2) = (√6+√2)/4."
      },
      {
        text: "Given tanq = 7/2, evaluate sin2q.",
        options: ["28/35", "35/28", "28/53", "53/28"],
        correct: 2,
        explanation: "With tanq = 7/2, sinq = 7/√53 and cosq = 2/√53. sin2q = 2sinq cosq = 28/53."
      },
      {
        text: "Given tanq = 7/2, evaluate cos2q.",
        options: ["−53/45", "53/45", "45/53", "−45/53"],
        correct: 3,
        explanation: "cos2q = cos²q − sin²q = 4/53 − 49/53 = −45/53."
      },
      {
        text: "Evaluate tan²q − sec²q.",
        options: ["1", "−1", "2", "−2"],
        correct: 1,
        explanation: "Since sec²q = 1 + tan²q, we have tan²q − sec²q = −1."
      },
      {
        text: "Expand sinv using half-angle.",
        options: ["sin(½v)cos(½v)", "sin²(½v)", "cos²(½v)", "2sin(½v)cos(½v)"],
        correct: 3,
        explanation: "Using the double angle formula: sinv = sin(2·½v) = 2sin(½v)cos(½v)."
      },
      {
        text: "Which of these evaluates to −1?",
        options: ["cot²r + cosec²r", "cotr", "cot²r − cosec²r", "cotr − cosecr"],
        correct: 2,
        explanation: "From 1 + cot²r = cosec²r, we get cot²r − cosec²r = −1."
      }
    ]
  },

  /* ============================================================
     CHAPTER 3 — Sequences & Series
  ============================================================ */
  {
    number: 3,
    title: "Sequences & Series",
    questionLimit: 20,
    timeLimit: 15,
    summary: "Sequences are ordered lists of numbers following a pattern. Arithmetic progressions (AP) have a constant difference, while geometric progressions (GP) have a constant ratio. Key formulae include the nth term, sum of n terms, and sum to infinity for convergent geometric series.",
    keyPoints: [
      "AP nth term: Uₙ = a + (n−1)d; Sum: Sₙ = n/2[2a + (n−1)d]",
      "GP nth term: Uₙ = arⁿ⁻¹; Sum: Sₙ = a(1−rⁿ)/(1−r) for r≠1",
      "Sum to infinity (GP): S∞ = a/(1−r), valid when |r| < 1",
      "Geometric mean of a, b, c: b = √(ac); Arithmetic mean: b = (a+c)/2",
      "Triangular numbers: 1, 1+2, 1+2+3, … i.e. sums 1, 3, 6, 10, 15, …"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "Find the sum of all odd numbers between 1 and 99.",
        options: ["25000", "2500", "250", "250000"],
        correct: 1,
        explanation: "Odd numbers from 1 to 99: AP with a=1, d=2, l=99. n=50. S = 50/2(1+99) = 25 × 100 = 2500."
      },
      {
        text: "The first term of a geometric progression is 10 and the sum to infinity is 20. Find the common ratio.",
        options: ["2", "1/2", "1/4", "4"],
        correct: 1,
        explanation: "S∞ = a/(1−r) → 20 = 10/(1−r) → 1−r = 1/2 → r = 1/2."
      },
      {
        text: "Find the geometric mean for consecutive terms 2, 4, 8.",
        options: ["2", "4", "8", "16"],
        correct: 1,
        explanation: "Geometric mean of 2 and 8 is √(2×8) = √16 = 4."
      },
      {
        text: "Find the arithmetic mean for consecutive terms −3, 2, 7.",
        options: ["2", "7", "−3", "None"],
        correct: 0,
        explanation: "Arithmetic mean = (−3+7)/2 = 4/2 = 2."
      },
      {
        text: "To what sum does the series 1 − 1/5 + 1/25 − … converge?",
        options: ["1/5", "5/6", "6/5", "4/5"],
        correct: 1,
        explanation: "a = 1, r = −1/5. S∞ = 1/(1−(−1/5)) = 1/(6/5) = 5/6."
      },
      {
        text: "If the sixth term of an AP is 11 and the first term is 1, find the common difference.",
        options: ["2", "1/2", "1/4", "4"],
        correct: 0,
        explanation: "U₆ = a + 5d → 11 = 1 + 5d → d = 2."
      },
      {
        text: "The fourth term of an AP is 13 and the tenth term is 31. Find the twenty-first term.",
        options: ["46", "64", "73", "3"],
        correct: 1,
        explanation: "d = (31−13)/(10−4) = 18/6 = 3. a = 13 − 3(3) = 4. U₂₁ = 4 + 20(3) = 64."
      },
      {
        text: "The second and fourth terms of a GP are 8 and 32. What is the sum of the first four terms?",
        options: ["2", "4", "60", "15"],
        correct: 2,
        explanation: "ar = 8, ar³ = 32 → r² = 4 → r = 2 → a = 4. S₄ = 4(1−2⁴)/(1−2) = 60."
      },
      {
        text: "Express the recurring decimal 0.3131… as a fraction in its lowest term.",
        options: ["31/99", "13/99", "99/31", "31/91"],
        correct: 0,
        explanation: "0.3131… = 31/99, since two digits repeat and the denominator is 99."
      },
      {
        text: "The first and last terms of an AP are 4 and 26 with sum 180. How many terms are there?",
        options: ["12", "10", "4", "30"],
        correct: 0,
        explanation: "Sₙ = n/2(a+l) → 180 = n/2(4+26) = 15n → n = 12."
      },
      {
        text: "Find the first term and common difference of three numbers in AP whose sum is 12 and product is 64.",
        options: ["0,2", "4,0", "0,4", "2,0"],
        correct: 1,
        explanation: "Let the numbers be a−d, a, a+d. Sum = 3a = 12 → a = 4. Product = a(a²−d²) = 64 → d = 0."
      },
      {
        text: "The third and fourth terms of an AP are 15 and 5. Find the first term and common difference.",
        options: ["35, 10", "10, −35", "35, −10", "−10, −35"],
        correct: 2,
        explanation: "d = 5 − 15 = −10. a + 2(−10) = 15 → a = 35."
      },
      {
        text: "Find the first term and common ratio of the GP where the third and seventh terms are −1 and −81.",
        options: ["−1/9, 3", "3, −1/9", "1/9, −3", "−1/9, −3"],
        correct: 0,
        explanation: "ar² = −1, ar⁶ = −81. Dividing: r⁴ = 81 → r = 3. Then a = −1/r² = −1/9."
      },
      {
        text: "Find the sum of the first twenty-five odd numbers.",
        options: ["526", "625", "265", "562"],
        correct: 1,
        explanation: "Sum of first n odd numbers = n². For n = 25: 25² = 625."
      },
      {
        text: "Insert three arithmetic means between 3 and 19. What is the sum of the resulting sequence?",
        options: ["4", "15", "19", "55"],
        correct: 3,
        explanation: "The sequence is 3, 7, 11, 15, 19 — five terms. Sum = 5/2(3+19) = 55."
      },
      {
        text: "The sixth and thirteenth terms of an AP are 0 and 14. Find the sum of the first twenty terms.",
        options: ["0", "14", "−20", "−10"],
        correct: 2,
        explanation: "7d = 14 → d = 2. a + 5(2) = 0 → a = −10. S₂₀ = 10[2(−10)+19(2)] = 10(−2) = −20."
      },
      {
        text: "The first term of a GP is 4 and the sum to infinity is 20. Find the common ratio.",
        options: ["4/5", "4", "5/4", "5"],
        correct: 0,
        explanation: "S∞ = a/(1−r) = 4/(1−r) = 20 → 1−r = 1/5 → r = 4/5."
      },
      {
        text: "Find the geometric mean for consecutive terms a, b, c.",
        options: ["b = √(ac)", "b = ac", "b = a/c", "b = c/a"],
        correct: 0,
        explanation: "In a GP, b/a = c/b → b² = ac → b = √(ac)."
      }
    ]
  },

  /* ============================================================
     CHAPTER 4 — Binomial Theorem & Expansion
  ============================================================ */
  {
    number: 4,
    title: "Binomial Theorem & Expansion",
    questionLimit: 20,
    timeLimit: 15,
    summary: "The binomial theorem provides a formula for expanding (a + b)ⁿ. For positive integer n: (a+b)ⁿ = Σ C(n,r) aⁿ⁻ʳ bʳ. For fractional or negative n, the expansion is valid for |x| < 1. Pascal's triangle gives the binomial coefficients, and the general term is T(r+1) = C(n,r) aⁿ⁻ʳ bʳ.",
    keyPoints: [
      "General term: T(r+1) = C(n,r) aⁿ⁻ʳ bʳ",
      "Pascal's identity: C(n,r−1) + C(n,r) = C(n+1,r)",
      "Sum of all binomial coefficients: Σ C(n,r) = 2ⁿ",
      "For non-integer n: (1+x)ⁿ valid when |x| < 1",
      "Term independent of x: set power of x in general term to zero"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "What is the coefficient of xʳ in the expansion of (1 + x)ⁿ?",
        options: ["C(n, r−1)", "C(n+1, r+1)", "C(n, r)", "C(n−1, r)"],
        correct: 2,
        explanation: "The coefficient of xʳ in (1+x)ⁿ is C(n, r) = n! / [r!(n−r)!]."
      },
      {
        text: "From Pascal's triangle, C(n, r−1) + C(n, r) gives:",
        options: ["C(n+1, r)", "C(n, r+1)", "C(n+1, r−1)", "C(n, r−1)"],
        correct: 0,
        explanation: "Pascal's identity: C(n, r−1) + C(n, r) = C(n+1, r)."
      },
      {
        text: "The value of Σ C(n, r) for r = 0 to n is:",
        options: ["2ⁿ⁻²", "2ⁿ", "2n", "n²"],
        correct: 1,
        explanation: "The sum of all binomial coefficients equals 2ⁿ (set x = 1 in (1+x)ⁿ)."
      },
      {
        text: "For positive integer n, n! is equivalent to:",
        options: ["(n−1)!", "n(n+1)(n−2)!", "(n+1)!", "n(n−1)(n−2)!"],
        correct: 3,
        explanation: "By definition: n! = n × (n−1) × (n−2) × … × 1 = n(n−1)(n−2)!"
      },
      {
        text: "Obtain the first four terms of (1 + 3x)^(1/3) in ascending powers of x.",
        options: ["1 + x − x² + (5/3)x³", "1 − x − x² + (5/3)x³", "1 − x + x² + (5/3)x³", "1 + x − x² − (3/5)x³"],
        correct: 0,
        explanation: "Using binomial expansion with n = 1/3: (1+3x)^(1/3) ≈ 1 + x − x² + (5/3)x³."
      },
      {
        text: "For what values of x is the expansion of 1/(a + bx) valid?",
        options: ["|x| < a/b", "|x| > a/b", "|x| < 1/b", "|x| < a/2"],
        correct: 0,
        explanation: "The expansion is valid when |bx/a| < 1, i.e., |x| < a/b."
      },
      {
        text: "Find the first four terms of (1 − 3x²)⁵ in ascending powers of x.",
        options: ["1 − 15x² + 90x⁴ − 270x⁶", "1 + 15x² + 90x⁴ − 270x⁶", "1 − 15x² − 90x⁴ + 270x⁶", "1 + 15x² + 90x⁴ + 270x⁶"],
        correct: 0,
        explanation: "C(5,0)(−3x²)⁰ + C(5,1)(−3x²)¹ + C(5,2)(−3x²)² + C(5,3)(−3x²)³ = 1 − 15x² + 90x⁴ − 270x⁶."
      },
      {
        text: "Find the sum of the constant coefficients in the expansion of (3 + 2x)⁴.",
        options: ["620", "630", "625", "216"],
        correct: 2,
        explanation: "Setting x = 1: (3+2)⁴ = 5⁴ = 625."
      },
      {
        text: "Find the constant term in the expansion of (3x + 1)⁸.",
        options: ["1", "2", "3", "4"],
        correct: 0,
        explanation: "The constant term occurs when r = 8 in C(8,8)(3x)⁰(1)⁸ = 1."
      },
      {
        text: "Find the value of n when C(n, 2) = 120.",
        options: ["−15", "15", "−16", "16"],
        correct: 3,
        explanation: "C(n,2) = n(n−1)/2 = 120 → n(n−1) = 240 → n = 16."
      },
      {
        text: "Find the value of Σ r·C(5,r) for r = 1 to 5.",
        options: ["60", "6", "32", "80"],
        correct: 3,
        explanation: "Using the identity Σ r·C(n,r) = n·2^(n−1): 5 × 2⁴ = 5 × 16 = 80."
      },
      {
        text: "Find the term independent of x in the expansion of (x²− 1/(2x))⁹.",
        options: ["16/21", "21/16", "21", "16"],
        correct: 1,
        explanation: "Power of x: 2(9−r) − r = 18 − 3r = 0 → r = 6. Term = C(9,6)(−1/2)⁶ = 84/64 = 21/16."
      },
      {
        text: "Find the constant term in the expansion of (x² − 2/x)⁶.",
        options: ["360", "240", "140", "420"],
        correct: 1,
        explanation: "Power of x: 2(6−r) − r = 12 − 3r = 0 → r = 4. Term = C(6,4) × 16 = 15 × 16 = 240."
      },
      {
        text: "State the condition under which the expansion of (a + 2b)⁻⁵ is valid in ascending powers of b.",
        options: ["|b/a| < 1/2", "|b/a| < 1", "|b/a| > 1/2", "|b/a| < 1/4"],
        correct: 0,
        explanation: "(a+2b)⁻⁵ = a⁻⁵(1+2b/a)⁻⁵. Valid when |2b/a| < 1, i.e., |b/a| < 1/2."
      },
      {
        text: "Find the fifth term in the expansion of (3x + 2y²)¹² in descending powers of x.",
        options: ["5196312x⁸y⁸", "51963120x⁶y⁹", "51963120x⁷y⁸", "51963120x⁸y⁸"],
        correct: 3,
        explanation: "T₅ = C(12,4)(3x)⁸(2y²)⁴ = 495 × 6561x⁸ × 16y⁸ = 51963120x⁸y⁸."
      }
    ]
  }

]); // end PORTAL_INJECT for MTS 101
