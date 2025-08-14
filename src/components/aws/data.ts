export interface AWSService {
    id: string
    title: string
    shortTitle: string
    image?: string
    icon?: string // Now optional as we'll use Lucide icons based on ID
    description: string
    longDescription: string
    keyFeatures: string[]
    benefits: {
        title: string
        description: string
    }[]
    useCases: {
        title: string
        description: string
        image: string
    }[]
    howItWorks: {
        title: string
        description: string
        icon: string
    }[]
    faqs: {
        question: string
        answer: string
    }[]
}

export const awsServices: AWSService[] = [
    {
        id: "aws-dsr",
        title: "AWS Elastic Disaster Recovery (AWS DSR)",
        shortTitle: "Elastic Disaster Recovery",
        icon: "/data.png?height=80&width=80",
        description: "Recover your application within minutes. Safeguard your business beyond boundaries",
        longDescription:
            "AWS Elastic Disaster Recovery (AWS DRS) minimizes downtime and data loss with fast, reliable recovery of on-premises and cloud-based applications using affordable storage, minimal compute, and point-in-time recovery.",
        keyFeatures: [
            "Continuous block-level replication for minimal data loss",
            "Sub-minute RPO (Recovery Point Objective)",
            "RTO (Recovery Time Objective) of minutes",
            "Point-in-time recovery to protect against logical corruption",
            "Non-disruptive testing without impacting production workloads",
            "Support for most operating systems and databases",
        ],
        benefits: [
            {
                title: "Minimal Downtime",
                description: "Recover applications in minutes rather than hours or days, minimizing business disruption.",
            },
            {
                title: "Cost-Effective",
                description:
                    "Pay only for what you use with no upfront costs, expensive duplicate infrastructure, or long-term contracts.",
            },
            {
                title: "Simplified Recovery",
                description: "Automate and simplify the disaster recovery process with minimal manual intervention required.",
            },
            {
                title: "Non-Disruptive Testing",
                description: "Test your disaster recovery plan without impacting production workloads or end-users.",
            },
            {
                title: "Flexible Recovery Options",
                description:
                    "Choose from various recovery options including point-in-time recovery to protect against logical corruption.",
            },
            {
                title: "Broad Compatibility",
                description:
                    "Support for most operating systems, databases, and applications without requiring changes to your existing infrastructure.",
            },
        ],
        howItWorks: [
            {
                title: "Stage 1: Set Up and Replication",
                description:
                    "Install lightweight agents on your source servers that replicate your data to a staging area in your AWS account. This continuous replication ensures your recovery point is always up-to-date.",
                icon: "Server",
            },
            {
                title: "Stage 2: Launch Recovery Instances",
                description:
                    "When needed, launch recovery instances using the replicated data. These instances can be launched for testing or actual recovery scenarios without disrupting your source environment.",
                icon: "Shield",
            },
            {
                title: "Stage 3: Failover",
                description:
                    "In case of a disaster, initiate failover to your recovery instances. AWS DRS automates the conversion process to make your applications run natively on AWS with minimal downtime.",
                icon: "Clock",
            },
            {
                title: "Stage 4: Failback (Optional)",
                description:
                    "Once your primary site is operational again, you can failback your applications from AWS to your original infrastructure, maintaining business continuity throughout the process.",
                icon: "BarChart",
            },
        ],
        useCases: [
            {
                title: "On-Premises to AWS Disaster Recovery",
                description:
                    "Protect your on-premises workloads by using AWS as your disaster recovery site, eliminating the need for a secondary physical data center.",
                image: "/placeholder.svg?height=300&width=500",
            },
            {
                title: "Cross-Region Disaster Recovery",
                description:
                    "Enhance your resilience by setting up disaster recovery across multiple AWS regions to protect against regional outages.",
                image: "/placeholder.svg?height=300&width=500",
            },
            {
                title: "Datacenter Migration",
                description:
                    "Use AWS DRS to facilitate datacenter migrations with minimal downtime and risk, ensuring business continuity throughout the process.",
                image: "/placeholder.svg?height=300&width=500",
            },
            {
                title: "Compliance Requirements",
                description:
                    "Meet regulatory and compliance requirements for disaster recovery and business continuity planning with documented recovery processes.",
                image: "/placeholder.svg?height=300&width=500",
            },
        ],
        faqs: [
            {
                question: "What is the difference between RPO and RTO?",
                answer:
                    "Recovery Point Objective (RPO) refers to the maximum acceptable amount of data loss measured in time, while Recovery Time Objective (RTO) is the maximum acceptable length of time to restore normal operations after a disaster. AWS Elastic Disaster Recovery offers sub-minute RPO and RTO of minutes.",
            },
            {
                question: "Can AWS Elastic Disaster Recovery work with on-premises systems?",
                answer:
                    "Yes, AWS Elastic Disaster Recovery is designed to work with both on-premises systems and cloud-based workloads, making it an ideal solution for hybrid environments.",
            },
            {
                question: "How does AWS Elastic Disaster Recovery minimize costs?",
                answer:
                    "AWS Elastic Disaster Recovery minimizes costs by using affordable storage for continuous replication and only requiring compute resources when you launch recovery instances for testing or actual recovery, following a pay-as-you-use model.",
            },
            {
                question: "What operating systems are supported by AWS Elastic Disaster Recovery?",
                answer:
                    "AWS Elastic Disaster Recovery supports most common operating systems including various versions of Windows Server, Amazon Linux, Red Hat Enterprise Linux, Ubuntu, CentOS, and SUSE Linux Enterprise Server.",
            },
            {
                question: "How often should we test our disaster recovery solution?",
                answer:
                    "We recommend testing your disaster recovery solution at least quarterly, with more frequent testing for critical systems. AWS Elastic Disaster Recovery allows for non-disruptive testing without impacting your production environment.",
            },
        ],
    },
    {
        id: "amazon-ec2",
        title: "Amazon Elastic Compute Cloud (Amazon EC2)",
        shortTitle: "Elastic Compute Cloud",
        icon: "/ec2.png?height=80&width=80",
        description: "Develop and deploy applications without hardware constraints.",
        longDescription:
            "Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers, with complete control over your computing resources.",
        keyFeatures: [
            "Elastic computing that scales with your needs",
            "Multiple instance types optimized for different use cases",
            "Integration with other AWS services",
            "Secure and reliable infrastructure",
            "Pay-as-you-go pricing with no upfront costs",
            "Global reach with multiple availability zones",
        ],
        benefits: [
            {
                title: "Scalability",
                description:
                    "Scale your compute capacity up or down based on demand, ensuring optimal performance and cost efficiency.",
            },
            {
                title: "Flexibility",
                description:
                    "Choose from a wide range of instance types, operating systems, and software packages to meet your specific requirements.",
            },
            {
                title: "Cost-Effective",
                description: "Pay only for the compute capacity you use, with no upfront investments or long-term commitments.",
            },
            {
                title: "Security",
                description:
                    "Benefit from AWS's robust security features, including network isolation, encryption, and identity management.",
            },
            {
                title: "Reliability",
                description:
                    "Deploy applications across multiple availability zones for high availability and fault tolerance.",
            },
            {
                title: "Global Reach",
                description:
                    "Access compute resources in multiple regions worldwide to reduce latency and improve user experience.",
            },
        ],
        howItWorks: [
            {
                title: "Stage 1: Select Instance Type",
                description:
                    "Choose from a variety of instance types optimized for different use cases, such as compute-optimized, memory-optimized, or storage-optimized instances.",
                icon: "Cpu",
            },
            {
                title: "Stage 2: Configure Instance",
                description:
                    "Specify the number of instances, network settings, security groups, and storage options to meet your application requirements.",
                icon: "Settings",
            },
            {
                title: "Stage 3: Launch and Connect",
                description:
                    "Launch your instances and connect to them using SSH (for Linux) or RDP (for Windows) to install and configure your applications.",
                icon: "Play",
            },
            {
                title: "Stage 4: Monitor and Scale",
                description:
                    "Monitor your instances using Amazon CloudWatch and scale your capacity up or down based on demand using Auto Scaling groups.",
                icon: "LineChart",
            },
        ],
        useCases: [
            {
                title: "Web Applications",
                description:
                    "Host websites, web applications, and content management systems with the ability to scale based on traffic patterns.",
                image: "/placeholder.svg?height=300&width=500",
            },
            {
                title: "Enterprise Applications",
                description:
                    "Run business-critical applications like ERP, CRM, and financial systems with high availability and performance.",
                image: "/placeholder.svg?height=300&width=500",
            },
            {
                title: "High-Performance Computing",
                description:
                    "Process complex simulations, data analysis, and scientific computations using specialized high-performance instances.",
                image: "/placeholder.svg?height=300&width=500",
            },
            {
                title: "Development and Testing",
                description:
                    "Create development, testing, and staging environments that mirror production without the need for physical hardware.",
                image: "/placeholder.svg?height=300&width=500",
            },
        ],
        faqs: [
            {
                question: "What is the difference between EC2 instance types?",
                answer:
                    "EC2 offers various instance types optimized for different use cases. For example, compute-optimized instances (C-family) are ideal for compute-bound applications, memory-optimized instances (R-family) are designed for memory-intensive workloads, and storage-optimized instances (D-family) are optimized for applications that require high, sequential read/write access to large datasets.",
            },
            {
                question: "How does EC2 pricing work?",
                answer:
                    "EC2 offers several pricing models: On-Demand (pay by the hour with no commitments), Reserved Instances (up to 72% discount for 1-3 year commitments), Spot Instances (up to 90% discount for flexible start and end times), and Dedicated Hosts (physical servers dedicated for your use).",
            },
            {
                question: "What is the difference between EC2 and traditional hosting?",
                answer:
                    "EC2 provides greater flexibility, scalability, and cost-efficiency compared to traditional hosting. With EC2, you can provision resources in minutes, scale up or down based on demand, pay only for what you use, and benefit from AWS's global infrastructure and security features.",
            },
            {
                question: "Can I migrate my existing applications to EC2?",
                answer:
                    "Yes, most applications can be migrated to EC2 with minimal modifications. AWS provides various tools and services to facilitate migration, such as AWS Application Migration Service, AWS Database Migration Service, and AWS Server Migration Service.",
            },
            {
                question: "How do I ensure high availability for my EC2 instances?",
                answer:
                    "To ensure high availability, deploy your EC2 instances across multiple Availability Zones within a region, use Elastic Load Balancing to distribute traffic, implement Auto Scaling to maintain instance capacity, and leverage Amazon CloudWatch for monitoring and automated recovery.",
            },
        ],
    },
    {
        id: "amazon-s3",
        title: "Amazon Simple Storage Service (Amazon S3)",
        shortTitle: "Simple Storage Service",
        icon: "/s3.png?height=80&width=80",
        description: "Store and retrieve large amounts of data, such as files, images, videos, backups, and logs.",
        longDescription:
            "Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability, data availability, security, and performance. It provides easy-to-use management features that allow you to organize your data and configure finely-tuned access controls to meet your specific business, organizational, and compliance requirements.",
        keyFeatures: [
            "Virtually unlimited storage capacity",
            "99.999999999% (11 9's) of data durability",
            "Multiple storage classes for cost optimization",
            "Comprehensive security and compliance capabilities",
            "Query-in-place functionality",
            "Lifecycle management for automatic data transitions",
        ],
        benefits: [
            {
                title: "Durability and Availability",
                description:
                    "Store data with 99.999999999% durability and 99.99% availability, ensuring your data is safe and accessible when needed.",
            },
            {
                title: "Scalability",
                description:
                    "Scale your storage from gigabytes to petabytes without worrying about capacity planning or hardware provisioning.",
            },
            {
                title: "Cost-Effective",
                description:
                    "Choose from multiple storage classes to optimize costs based on access patterns and data lifecycle.",
            },
            {
                title: "Security",
                description:
                    "Protect your data with encryption, access control, and audit capabilities to meet compliance requirements.",
            },
            {
                title: "Performance",
                description:
                    "Access your data with low latency and high throughput, regardless of the size or location of your data.",
            },
            {
                title: "Integration",
                description:
                    "Easily integrate with other AWS services and third-party tools for data processing, analytics, and management.",
            },
        ],
        howItWorks: [
            {
                title: "Stage 1: Create Buckets",
                description:
                    "Create buckets to store your objects, which can be files, images, videos, or any other type of data. Each bucket has a globally unique name and is associated with a specific AWS region.",
                icon: "Database",
            },
            {
                title: "Stage 2: Upload Objects",
                description:
                    "Upload objects to your buckets using the AWS Management Console, AWS CLI, AWS SDKs, or REST API. Each object has a unique key within the bucket and can be up to 5 TB in size.",
                icon: "Upload",
            },
            {
                title: "Stage 3: Configure Access",
                description:
                    "Configure access controls using bucket policies, IAM policies, access control lists (ACLs), and S3 Block Public Access to ensure only authorized users can access your data.",
                icon: "Lock",
            },
            {
                title: "Stage 4: Manage Lifecycle",
                description:
                    "Define lifecycle rules to automatically transition objects between storage classes or expire them based on their age, reducing storage costs and management overhead.",
                icon: "Recycle",
            },
        ],
        useCases: [
            {
                title: "Data Backup and Archive",
                description:
                    "Store backups and archives of your on-premises or cloud data with high durability and low cost using S3 Glacier storage classes.",
                image: "/placeholder.svg?height=300&width=500",
            },
            {
                title: "Content Distribution",
                description:
                    "Distribute content to end-users with low latency by integrating S3 with Amazon CloudFront, AWS's content delivery network (CDN).",
                image: "/placeholder.svg?height=300&width=500",
            },
            {
                title: "Data Lakes",
                description:
                    "Build data lakes to store and analyze structured and unstructured data at any scale, enabling big data analytics and machine learning.",
                image: "/placeholder.svg?height=300&width=500",
            },
            {
                title: "Static Website Hosting",
                description:
                    "Host static websites with high availability and scalability without the need for web servers or infrastructure management.",
                image: "/placeholder.svg?height=300&width=500",
            },
        ],
        faqs: [
            {
                question: "What is the difference between S3 storage classes?",
                answer:
                    "S3 offers various storage classes optimized for different use cases: S3 Standard for frequently accessed data, S3 Intelligent-Tiering for data with changing access patterns, S3 Standard-IA and S3 One Zone-IA for infrequently accessed data, S3 Glacier and S3 Glacier Deep Archive for long-term archival, and S3 Outposts for on-premises storage.",
            },
            {
                question: "How secure is Amazon S3?",
                answer:
                    "Amazon S3 provides comprehensive security features, including server-side encryption, client-side encryption, SSL/TLS encryption for data in transit, access control through IAM policies, bucket policies, and ACLs, S3 Block Public Access, and AWS CloudTrail for logging and monitoring.",
            },
            {
                question: "Can I use Amazon S3 for large-scale data transfers?",
                answer:
                    "Yes, AWS offers several options for large-scale data transfers to S3, including AWS DataSync for automated data transfer, AWS Transfer Family for file transfers over SFTP, FTPS, and FTP, AWS Snow Family for physical data transport, and S3 Transfer Acceleration for fast transfers over the internet.",
            },
            {
                question: "How does S3 pricing work?",
                answer:
                    "S3 pricing is based on four components: storage (per GB per month), requests and data retrievals, data transfer (outbound), and management features. The specific rates vary by storage class, region, and usage volume. There are no minimum fees or setup costs.",
            },
            {
                question: "Can I analyze data directly in S3?",
                answer:
                    "Yes, S3 offers query-in-place functionality through S3 Select and Amazon Athena, allowing you to analyze data directly in S3 without having to move it to a separate analytics system. This can significantly reduce costs and complexity for data analysis workflows.",
            },
        ],
    },
    {
        id: "amazon-ebs",
        title: "Amazon Elastic Block Store (Amazon EBS)",
        shortTitle: "Elastic Block Store",
        icon: "/sdr.png?height=80&width=80",
        description:
            "Get durable, high-performance block storage for Amazon EC2 instances, so you can run applications, databases, and other workloads.",
        longDescription:
            "Amazon Elastic Block Store (Amazon EBS) provides persistent block storage volumes for use with Amazon EC2 instances. Each EBS volume is automatically replicated within its Availability Zone to protect you from component failure, offering high availability and durability.",
        keyFeatures: [
            "High-performance block storage",
            "Multiple volume types for different workloads",
            "Data persistence independent of EC2 instance lifecycle",
            "Snapshot capabilities for backup and recovery",
            "Encryption for data security",
            "Easy scaling of storage capacity",
        ],
        benefits: [
            {
                title: "Performance",
                description:
                    "Choose from different volume types to optimize for IOPS, throughput, or cost based on your workload requirements.",
            },
            {
                title: "Durability",
                description:
                    "Benefit from automatic replication within an Availability Zone, providing 99.999% durability for your data.",
            },
            {
                title: "Flexibility",
                description:
                    "Attach and detach volumes from instances, resize volumes, and change volume types without disrupting your applications.",
            },
            {
                title: "Security",
                description: "Encrypt your data at rest and in transit with AWS Key Management Service (KMS) integration.",
            },
            {
                title: "Backup and Recovery",
                description:
                    "Create point-in-time snapshots of your volumes for backup, disaster recovery, or volume creation.",
            },
            {
                title: "Cost-Effective",
                description: "Pay only for the provisioned storage capacity, with no upfront costs or long-term commitments.",
            },
        ],
        howItWorks: [
            {
                title: "Stage 1: Create Volumes",
                description:
                    "Create EBS volumes with the desired size, type, and performance characteristics in the same Availability Zone as your EC2 instances.",
                icon: "HardDrive",
            },
            {
                title: "Stage 2: Attach Volumes",
                description:
                    "Attach EBS volumes to your EC2 instances as block devices, which can be formatted with a file system and used like physical drives.",
                icon: "Link",
            },
            {
                title: "Stage 3: Use Volumes",
                description:
                    "Use EBS volumes for your data storage needs, such as running databases, storing application data, or hosting file systems.",
                icon: "Database",
            },
            {
                title: "Stage 4: Manage Volumes",
                description:
                    "Create snapshots for backup, resize volumes for capacity changes, modify volume types for performance adjustments, and detach/reattach volumes as needed.",
                icon: "Settings2",
            },
        ],
        useCases: [
            {
                title: "Database Hosting",
                description:
                    "Run relational and NoSQL databases with the performance, durability, and features required for production workloads.",
                image: "/placeholder.svg?height=300&width=500",
            },
            {
                title: "Enterprise Applications",
                description:
                    "Host business-critical applications that require persistent and high-performance storage, such as ERP, CRM, and financial systems.",
                image: "/placeholder.svg?height=300&width=500",
            },
            {
                title: "Development and Test Environments",
                description:
                    "Create and manage storage volumes for development, testing, and staging environments with the ability to quickly create and delete resources.",
                image: "/placeholder.svg?height=300&width=500",
            },
            {
                title: "Big Data Analytics",
                description:
                    "Store and process large datasets for analytics workloads, with the ability to scale storage capacity and performance as needed.",
                image: "/placeholder.svg?height=300&width=500",
            },
        ],
        faqs: [
            {
                question: "What are the different EBS volume types?",
                answer:
                    "EBS offers several volume types: General Purpose SSD (gp2 and gp3) for a balance of price and performance, Provisioned IOPS SSD (io1 and io2) for I/O-intensive workloads, Throughput Optimized HDD (st1) for frequently accessed, throughput-intensive workloads, and Cold HDD (sc1) for less frequently accessed data.",
            },
            {
                question: "How do EBS snapshots work?",
                answer:
                    "EBS snapshots are point-in-time copies of your volumes stored in Amazon S3. They are incremental backups, meaning only the blocks that have changed since your last snapshot are saved. You can use snapshots to create new volumes, copy volumes across regions, or restore data in case of failure.",
            },
            {
                question: "Can I resize an EBS volume?",
                answer:
                    "Yes, you can increase the size of an EBS volume without detaching it from an instance. After resizing, you need to extend the file system on the volume to use the additional storage space. You can also change the volume type (e.g., from gp2 to io1) to adjust performance characteristics.",
            },
            {
                question: "What is the difference between EBS and instance store volumes?",
                answer:
                    "EBS volumes are persistent, meaning the data persists independently from the instance lifecycle. Instance store volumes are ephemeral, with data existing only during the lifetime of the instance. EBS volumes offer durability, snapshots, encryption, and the ability to detach/reattach, while instance store volumes provide very high I/O performance for temporary storage needs.",
            },
            {
                question: "How is EBS pricing calculated?",
                answer:
                    "EBS pricing is based on the volume type, provisioned capacity, and additional features used. You pay for provisioned storage (per GB-month), provisioned IOPS (for io1/io2 volumes), snapshot storage (per GB-month), and data transfer between Availability Zones or regions. There are no upfront costs or minimum fees.",
            },
        ],
    },
    {
        id: "aws-dms",
        title: "AWS Database Migration Service (DMS)",
        shortTitle: "Database Migration Service",
        icon: "/aaa.png?height=80&width=80",
        description: "Migrate your databases to AWS quickly, securely, and with minimal downtime.",
        longDescription:
            "AWS Database Migration Service (AWS DMS) helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS supports homogeneous migrations (such as Oracle to Oracle) as well as heterogeneous migrations between different database platforms (such as Oracle to Amazon Aurora or Microsoft SQL Server to MySQL).",
        keyFeatures: [
            "Minimal downtime during migration",
            "Support for homogeneous and heterogeneous migrations",
            "Continuous data replication for zero downtime",
            "Schema conversion for heterogeneous migrations",
            "Support for most popular commercial and open-source databases",
            "Simple to set up and monitor",
        ],
        benefits: [
            {
                title: "Minimal Downtime",
                description: "Keep your applications running during migration with minimal disruption to normal operations.",
            },
            {
                title: "Simplified Migration",
                description:
                    "Automate complex migration tasks with a simple, easy-to-use service that requires minimal expertise.",
            },
            {
                title: "Cost-Effective",
                description:
                    "Pay only for the resources used during migration, with no upfront costs or long-term commitments.",
            },
            {
                title: "Reliable",
                description:
                    "Benefit from a service that has migrated thousands of databases to AWS with high reliability and data integrity.",
            },
            {
                title: "Secure",
                description:
                    "Protect your data during migration with encryption in transit and integration with AWS security features.",
            },
            {
                title: "Flexible",
                description:
                    "Migrate between same-type databases or convert schemas between different database platforms to suit your needs.",
            },
        ],
        howItWorks: [
            {
                title: "Stage 1: Create Replication Instance",
                description:
                    "Create a replication instance that performs the migration tasks and handles the data transfer between source and target databases.",
                icon: "Server",
            },
            {
                title: "Stage 2: Define Endpoints",
                description:
                    "Define source and target endpoints that provide connection information for your source and target databases.",
                icon: "Database",
            },
            {
                title: "Stage 3: Create Migration Task",
                description:
                    "Create a migration task that specifies what tables to migrate, any transformations to apply, and whether to migrate existing data, replicate ongoing changes, or both.",
                icon: "ArrowRightLeft",
            },
            {
                title: "Stage 4: Monitor and Cutover",
                description:
                    "Monitor the migration progress, validate data, and perform the final cutover when you're ready to switch your applications to the target database.",
                icon: "Activity",
            },
        ],
        useCases: [
            {
                title: "Cloud Migration",
                description:
                    "Migrate on-premises databases to AWS cloud databases to reduce infrastructure costs and management overhead.",
                image: "/placeholder.svg?height=300&width=500",
            },
            {
                title: "Database Platform Change",
                description:
                    "Migrate from commercial databases to open-source or AWS-managed database services to reduce licensing costs and vendor lock-in.",
                image: "/placeholder.svg?height=300&width=500",
            },
            {
                title: "Database Consolidation",
                description:
                    "Consolidate multiple databases into a single database or data warehouse to simplify management and reduce costs.",
                image: "/placeholder.svg?height=300&width=500",
            },
            {
                title: "Continuous Replication",
                description:
                    "Set up ongoing replication between databases for disaster recovery, read scaling, or data distribution across regions.",
                image: "/placeholder.svg?height=300&width=500",
            },
        ],
        faqs: [
            {
                question: "What databases does AWS DMS support?",
                answer:
                    "AWS DMS supports most popular commercial and open-source databases, including Oracle, Microsoft SQL Server, MySQL, PostgreSQL, MariaDB, MongoDB, SAP ASE, IBM Db2, and Amazon's database services like Aurora, RDS, Redshift, DynamoDB, and DocumentDB.",
            },
            {
                question: "How does AWS DMS handle schema conversion?",
                answer:
                    "For heterogeneous migrations (between different database engines), AWS DMS works with AWS Schema Conversion Tool (AWS SCT) to convert database schemas and code objects to a format compatible with the target database. AWS SCT can also identify objects that cannot be automatically converted, providing guidance for manual conversion.",
            },
            {
                question: "What is the difference between full load and CDC?",
                answer:
                    "AWS DMS offers two migration methods: Full Load, which migrates existing data from the source to the target database, and Change Data Capture (CDC), which captures ongoing changes to the source database and applies them to the target. You can use Full Load only, CDC only, or both together for a complete migration with minimal downtime.",
            },
            {
                question: "How much downtime is required during migration?",
                answer:
                    "With AWS DMS, you can minimize downtime to just the time it takes to redirect your applications from the source to the target database. By using Full Load + CDC, AWS DMS first copies existing data, then captures and applies ongoing changes, allowing you to keep your source database operational until you're ready to switch over.",
            },
            {
                question: "How is AWS DMS priced?",
                answer:
                    "AWS DMS pricing is based on the replication instance type you use (which determines compute and memory resources), storage used for replication logs, data transfer between Availability Zones or regions, and any additional features like AWS SCT. There are no upfront costs or long-term commitments.",
            },
        ],
    },
    {
        id: "aws-mgn",
        title: "AWS Application Migration Service (MGN)",
        shortTitle: "Application Migration Service",
        icon: "/ddd.png?height=80&width=80",
        description: "Streamline, automate, and reduce the cost of migrating your applications to Amazon Web Services.",
        longDescription:
            "AWS Application Migration Service (AWS MGN) is the primary migration service recommended for lift-and-shift migrations to AWS. It simplifies and expedites your migration by automatically converting and launching your source servers to run natively on AWS.",
        keyFeatures: [
            "Automated lift-and-shift migration",
            "Minimal downtime with continuous replication",
            "Non-disruptive testing before cutover",
            "Support for most operating systems and applications",
            "Automated conversion to native AWS resources",
            "Simple, intuitive user interface",
        ],
        benefits: [
            {
                title: "Simplified Migration",
                description:
                    "Automate complex migration tasks with a simple, easy-to-use service that requires minimal expertise.",
            },
            {
                title: "Minimal Downtime",
                description: "Keep your applications running during migration with minimal disruption to normal operations.",
            },
            {
                title: "Cost-Effective",
                description: "Reduce migration costs with automated processes and pay-as-you-go pricing with no upfront costs.",
            },
            {
                title: "Accelerated Migration",
                description: "Speed up your migration timeline with automated conversion and launch processes.",
            },
            {
                title: "Reduced Risk",
                description: "Test your applications before cutover to ensure they work as expected in the AWS environment.",
            },
            {
                title: "Broad Compatibility",
                description: "Migrate most operating systems, applications, and databases without modification.",
            },
        ],
        howItWorks: [
            {
                title: "Stage 1: Install Replication Agent",
                description:
                    "Install the AWS Replication Agent on your source servers to begin replicating data to AWS without disrupting operations.",
                icon: "Download",
            },
            {
                title: "Stage 2: Data Replication",
                description:
                    "The Replication Agent continuously replicates your servers to AWS, ensuring your data is up-to-date when you're ready to migrate.",
                icon: "RefreshCw",
            },
            {
                title: "Stage 3: Test Instances",
                description:
                    "Launch test instances in AWS to verify your applications work correctly before the actual migration, without impacting your source environment.",
                icon: "TestTube",
            },
            {
                title: "Stage 4: Cutover and Launch",
                description:
                    "When you're ready to migrate, perform a cutover to launch your servers on AWS as native EC2 instances, with minimal downtime.",
                icon: "Rocket",
            },
        ],
        useCases: [
            {
                title: "Datacenter Exit",
                description:
                    "Migrate applications from on-premises datacenters to AWS to reduce infrastructure costs and management overhead.",
                image: "/placeholder.svg?height=300&width=500",
            },
            {
                title: "Cloud-to-Cloud Migration",
                description:
                    "Migrate applications from other cloud providers to AWS to take advantage of AWS's features, performance, and pricing.",
                image: "/placeholder.svg?height=300&width=500",
            },
            {
                title: "Disaster Recovery",
                description:
                    "Use AWS MGN for disaster recovery by continuously replicating your servers to AWS and launching them only when needed.",
                image: "/placeholder.svg?height=300&width=500",
            },
            {
                title: "Application Modernization",
                description:
                    "Start with a lift-and-shift migration to AWS, then gradually modernize your applications using AWS services and features.",
                image: "/placeholder.svg?height=300&width=500",
            },
        ],
        faqs: [
            {
                question: "What is the difference between AWS MGN and AWS DMS?",
                answer:
                    "AWS Application Migration Service (MGN) is designed for lift-and-shift migration of entire servers, including the operating system, applications, and data. AWS Database Migration Service (DMS) focuses specifically on migrating database data and schema, with support for homogeneous and heterogeneous database migrations.",
            },
            {
                question: "What operating systems does AWS MGN support?",
                answer:
                    "AWS MGN supports most common operating systems, including various versions of Windows Server, Amazon Linux, Red Hat Enterprise Linux, Ubuntu, CentOS, and SUSE Linux Enterprise Server. The AWS Replication Agent is compatible with these operating systems and can replicate them to run natively on AWS.",
            },
            {
                question: "How does AWS MGN minimize downtime during migration?",
                answer:
                    "AWS MGN uses continuous data replication to keep your target environment up-to-date with your source environment. When you're ready to migrate, you can perform a cutover with minimal downtime, typically measured in minutes. The exact downtime depends on factors like application complexity and database size.",
            },
            {
                question: "Can I test my applications before the final cutover?",
                answer:
                    "Yes, AWS MGN allows you to launch test instances in AWS using your replicated data without disrupting your source environment. This enables you to verify that your applications work correctly in AWS before performing the final cutover, reducing migration risk.",
            },
            {
                question: "How is AWS MGN priced?",
                answer:
                    "AWS MGN pricing is based on the number of servers being migrated and the duration of the migration process. There are no upfront costs or long-term commitments. You pay for the AWS resources used during replication (such as EBS volumes and EC2 instances) and a per-server fee for the MGN service itself.",
            },
        ],
    },
    {
        id: "ec2-windows",
        title: "Amazon EC2 for Windows",
        shortTitle: "EC2 for Windows",
        description: "Run Windows workloads on secure, reliable, and high-performance infrastructure.",
        longDescription: "Amazon EC2 for Windows provides a secure and reliable environment to run Windows-based applications and workloads on AWS's proven computing environment. It offers a wide selection of instances pre-configured with Windows Server and optimized for different use cases.",
        keyFeatures: [
            "Wide selection of Windows Server versions",
            "Integration with AWS services",
            "License included options",
            "Optimized for Windows workloads",
            "Secure and reliable infrastructure",
            "Flexible pricing options"
        ],
        benefits: [
            {
                title: "Cost Optimization",
                description: "Reduce costs with pay-as-you-go pricing and license-included options that eliminate upfront investments."
            },
            {
                title: "Performance",
                description: "Run Windows workloads on high-performance infrastructure optimized for different use cases."
            },
            {
                title: "Security",
                description: "Benefit from AWS's robust security features and regular security patches for Windows instances."
            },
            {
                title: "Scalability",
                description: "Easily scale your Windows applications up or down based on demand."
            },
            {
                title: "Integration",
                description: "Seamlessly integrate with other AWS services for a complete cloud solution."
            },
            {
                title: "Management",
                description: "Simplify management with AWS tools and services designed for Windows environments."
            }
        ],
        howItWorks: [
            {
                title: "Stage 1: Select Windows Instance",
                description: "Choose from various Windows Server versions and instance types based on your workload requirements.",
                icon: "Laptop"
            },
            {
                title: "Stage 2: Configure and Launch",
                description: "Configure your instance with the desired settings and launch it in your AWS environment.",
                icon: "Settings"
            },
            {
                title: "Stage 3: Connect and Use",
                description: "Connect to your Windows instance using RDP and install your applications and workloads.",
                icon: "Monitor"
            },
            {
                title: "Stage 4: Manage and Scale",
                description: "Manage your Windows instances and scale them based on your needs using AWS management tools.",
                icon: "BarChart"
            }
        ],
        useCases: [
            {
                title: "Windows Applications",
                description: "Run Windows-based applications in the cloud without changing your code or architecture.",
                image: "/placeholder.svg?height=300&width=500"
            },
            {
                title: "Microsoft SQL Server",
                description: "Deploy Microsoft SQL Server databases on optimized instances with license-included options.",
                image: "/placeholder.svg?height=300&width=500"
            },
            {
                title: "Windows Development and Testing",
                description: "Create Windows development and testing environments that can be quickly provisioned and decommissioned.",
                image: "/placeholder.svg?height=300&width=500"
            },
            {
                title: "Windows Desktop as a Service",
                description: "Provide virtual Windows desktops to your users with Amazon WorkSpaces integration.",
                image: "/placeholder.svg?height=300&width=500"
            }
        ],
        faqs: [
            {
                question: "What Windows Server versions are available?",
                answer: "AWS offers multiple Windows Server versions including Windows Server 2022, 2019, 2016, and 2012 R2. Both license-included and BYOL (Bring Your Own License) options are available."
            },
            {
                question: "How does licensing work for Windows on EC2?",
                answer: "You can choose license-included instances where the Windows Server license cost is included in the hourly price, or you can bring your own license (BYOL) if you have Microsoft License Mobility through Software Assurance."
            },
            {
                question: "Can I run Microsoft SQL Server on EC2 for Windows?",
                answer: "Yes, you can run Microsoft SQL Server on EC2 for Windows with either license-included instances or by bringing your own SQL Server licenses."
            },
            {
                question: "How do I connect to my Windows EC2 instance?",
                answer: "You connect to your Windows EC2 instance using Remote Desktop Protocol (RDP). AWS provides the necessary information and tools to establish a secure RDP connection to your instance."
            },
            {
                question: "Can I join my EC2 Windows instances to Active Directory?",
                answer: "Yes, you can join your EC2 Windows instances to Microsoft Active Directory. AWS offers AWS Directory Service for Microsoft Active Directory, or you can connect to your on-premises Active Directory."
            }
        ]
    },
    {
        id: "aws-transfer-family",
        title: "AWS Transfer Family",
        shortTitle: "Transfer Family",
        description: "Securely transfer files to AWS storage services using SFTP, FTPS, and FTP protocols.",
        longDescription: "AWS Transfer Family provides fully managed support for file transfers directly into and out of Amazon S3 or Amazon EFS. It supports Secure File Transfer Protocol (SFTP), File Transfer Protocol over SSL (FTPS), and File Transfer Protocol (FTP).",
        keyFeatures: [
            "Support for SFTP, FTPS, and FTP protocols",
            "Integration with Amazon S3 and Amazon EFS",
            "Authentication options including AWS Directory Service",
            "Custom domain names",
            "Fully managed service with high availability",
            "Pay-as-you-go pricing"
        ],
        benefits: [
            {
                title: "Simplified File Transfer",
                description: "Enable file transfers without the need to manage infrastructure, reducing operational overhead."
            },
            {
                title: "Security",
                description: "Secure your file transfers with encryption in transit and integration with AWS security services."
            },
            {
                title: "Scalability",
                description: "Automatically scale to handle your file transfer workloads without capacity planning."
            },
            {
                title: "Compatibility",
                description: "Support for industry-standard protocols ensures compatibility with existing workflows and tools."
            },
            {
                title: "Integration",
                description: "Seamlessly integrate with AWS storage services and the broader AWS ecosystem."
            },
            {
                title: "Cost-Effective",
                description: "Pay only for what you use with no upfront costs or long-term commitments."
            }
        ],
        howItWorks: [
            {
                title: "Stage 1: Create Server",
                description: "Create a Transfer Family server with your chosen protocol (SFTP, FTPS, or FTP) and endpoint type.",
                icon: "Server"
            },
            {
                title: "Stage 2: Configure Authentication",
                description: "Set up user authentication using service-managed users, AWS Directory Service, or custom identity providers.",
                icon: "Key"
            },
            {
                title: "Stage 3: Set Up Storage",
                description: "Configure Amazon S3 buckets or Amazon EFS file systems as the storage backend for your file transfers.",
                icon: "Database"
            },
            {
                title: "Stage 4: Transfer Files",
                description: "Users can now transfer files using their existing SFTP, FTPS, or FTP clients, with files stored directly in your AWS storage.",
                icon: "Upload"
            }
        ],
        useCases: [
            {
                title: "B2B File Transfers",
                description: "Securely exchange files with business partners, suppliers, and customers using familiar file transfer protocols.",
                image: "/placeholder.svg?height=300&width=500"
            },
            {
                title: "Data Lake Ingestion",
                description: "Ingest data into your AWS data lakes from external sources using standard file transfer protocols.",
                image: "/placeholder.svg?height=300&width=500"
            },
            {
                title: "Content Distribution",
                description: "Distribute content to partners and customers with secure, reliable file transfer capabilities.",
                image: "/placeholder.svg?height=300&width=500"
            },
            {
                title: "Legacy System Integration",
                description: "Connect legacy systems that use SFTP, FTPS, or FTP to modern AWS cloud storage and services.",
                image: "/placeholder.svg?height=300&width=500"
            }
        ],
        faqs: [
            {
                question: "What protocols does AWS Transfer Family support?",
                answer: "AWS Transfer Family supports Secure File Transfer Protocol (SFTP), File Transfer Protocol over SSL (FTPS), and File Transfer Protocol (FTP)."
            },
            {
                question: "What storage services can I use with AWS Transfer Family?",
                answer: "AWS Transfer Family integrates with Amazon S3 and Amazon EFS, allowing you to store transferred files directly in these services."
            },
            {
                question: "How does user authentication work?",
                answer: "AWS Transfer Family offers multiple authentication options: service-managed users (where you create and manage users within the service), AWS Directory Service for Microsoft Active Directory, and custom identity providers through AWS Lambda."
            },
            {
                question: "Can I use my own domain name?",
                answer: "Yes, you can use your own domain name with AWS Transfer Family by associating a custom hostname with your server endpoint, making the transition seamless for your users."
            },
            {
                question: "How is AWS Transfer Family priced?",
                answer: "AWS Transfer Family pricing is based on the provisioned endpoint hours and data transferred. You pay for the time your Transfer Family server is provisioned and the amount of data transferred over your server endpoint."
            }
        ]
    },
    {
        id: "aws-control-tower",
        title: "AWS Control Tower",
        shortTitle: "Control Tower",
        description: "Set up and govern a secure, compliant multi-account AWS environment with automated deployment.",
        longDescription: "AWS Control Tower provides a simplified way to set up and govern a secure, compliant, multi-account AWS environment based on best practices. It automates the setup of a landing zone, an environment that consists of multi-account structures, identity and access management, governance, data security, network design, and logging.",
        keyFeatures: [
            "Automated landing zone setup",
            "Guardrails for security and compliance",
            "Account factory for standardized provisioning",
            "Centralized logging and monitoring",
            "Dashboard for visibility and governance",
            "Integration with AWS Organizations"
        ],
        benefits: [
            {
                title: "Simplified Setup",
                description: "Set up a multi-account environment in a few clicks, reducing the time from days to hours."
            },
            {
                title: "Standardized Governance",
                description: "Implement consistent governance across all accounts with preventive and detective guardrails."
            },
            {
                title: "Automated Compliance",
                description: "Automatically enforce compliance policies across your entire AWS environment."
            },
            {
                title: "Centralized Management",
                description: "Manage your multi-account environment from a single dashboard with comprehensive visibility."
            },
            {
                title: "Best Practices",
                description: "Implement AWS best practices for security, operations, and compliance from the start."
            },
            {
                title: "Scalability",
                description: "Easily scale your AWS environment while maintaining consistent governance and compliance."
            }
        ],
        howItWorks: [
            {
                title: "Stage 1: Set Up Landing Zone",
                description: "Deploy a landing zone with a multi-account structure, including management, log archive, and audit accounts.",
                icon: "Home"
            },
            {
                title: "Stage 2: Configure Guardrails",
                description: "Implement preventive and detective guardrails to enforce security and compliance policies across accounts.",
                icon: "Shield"
            },
            {
                title: "Stage 3: Provision Accounts",
                description: "Use Account Factory to provision new accounts with standardized configurations and guardrails.",
                icon: "Plus"
            },
            {
                title: "Stage 4: Monitor and Govern",
                description: "Monitor your environment through the Control Tower dashboard and ensure ongoing compliance with guardrails.",
                icon: "BarChart"
            }
        ],
        useCases: [
            {
                title: "Enterprise Cloud Adoption",
                description: "Accelerate cloud adoption in large enterprises with a secure, compliant foundation that scales with your needs.",
                image: "/placeholder.svg?height=300&width=500"
            },
            {
                title: "Regulatory Compliance",
                description: "Implement and maintain compliance with regulatory requirements across your entire AWS environment.",
                image: "/placeholder.svg?height=300&width=500"
            },
            {
                title: "Multi-Team Environments",
                description: "Support multiple teams and projects with isolated accounts while maintaining centralized governance and security.",
                image: "/placeholder.svg?height=300&width=500"
            },
            {
                title: "Mergers and Acquisitions",
                description: "Quickly integrate acquired companies into your AWS environment with consistent security and governance.",
                image: "/placeholder.svg?height=300&width=500"
            }
        ],
        faqs: [
            {
                question: "What is a landing zone in AWS Control Tower?",
                answer: "A landing zone is a well-architected, multi-account AWS environment that follows AWS best practices for security, compliance, and operational excellence. It includes account structure, identity management, security policies, network design, and logging configuration."
            },
            {
                question: "What are guardrails in AWS Control Tower?",
                answer: "Guardrails are governance rules that provide ongoing governance for your entire AWS environment. They can be preventive (using service control policies to prevent actions) or detective (using AWS Config rules to detect non-compliance)."
            },
            {
                question: "How does AWS Control Tower work with existing AWS accounts?",
                answer: "AWS Control Tower can enroll existing AWS accounts into its governance, allowing you to extend Control Tower's benefits to your existing AWS environment. This process is called account enrollment."
            },
            {
                question: "Can I customize AWS Control Tower?",
                answer: "Yes, AWS Control Tower allows for customization through Customizations for AWS Control Tower (CfCT), which enables you to add your own templates, policies, and configurations to your Control Tower environment."
            },
            {
                question: "What is the difference between AWS Control Tower and AWS Organizations?",
                answer: "AWS Control Tower is built on top of AWS Organizations and provides additional functionality for setting up and governing a multi-account environment. While AWS Organizations focuses on account management and policy enforcement, Control Tower adds landing zone setup, guardrails, account factory, and a governance dashboard."
            }
        ]
    },
    {
        id: "aws-smb-competency",
        title: "AWS SMB Competency",
        image: "/black-woman.jpg",
        shortTitle: "SMB Competency",
        description: "Specialized expertise in supporting small and medium-sized businesses on their cloud journey.",
        longDescription: "The AWS SMB Competency recognizes partners with proven technical expertise and customer success in supporting small and medium-sized businesses (SMBs). As an AWS SMB Competency Partner, we have demonstrated our ability to help SMBs achieve their business goals by leveraging AWS services.",
        keyFeatures: [
            "Specialized SMB expertise",
            "Cost-effective solutions",
            "Simplified cloud adoption",
            "Scalable infrastructure",
            "Security best practices",
            "Ongoing optimization and support"
        ],
        benefits: [
            {
                title: "Tailored Solutions",
                description: "Solutions designed specifically for the unique needs and constraints of small and medium-sized businesses."
            },
            {
                title: "Cost Optimization",
                description: "Maximize value while minimizing costs with right-sized solutions that align with SMB budgets."
            },
            {
                title: "Reduced Complexity",
                description: "Simplified cloud adoption and management processes designed for organizations with limited IT resources."
            },
            {
                title: "Growth Support",
                description: "Scalable solutions that grow with your business without requiring significant reinvestment."
            },
            {
                title: "Security Focus",
                description: "Enterprise-grade security practices adapted for SMB environments and requirements."
            },
            {
                title: "Expert Guidance",
                description: "Access to specialized expertise in SMB cloud adoption, migration, and optimization."
            }
        ],
        howItWorks: [
            {
                title: "Stage 1: Assessment",
                description: "We assess your current environment, business goals, and constraints to develop a tailored cloud strategy.",
                icon: "Search"
            },
            {
                title: "Stage 2: Solution Design",
                description: "Our experts design cost-effective cloud solutions that address your specific business needs and challenges.",
                icon: "PenTool"
            },
            {
                title: "Stage 3: Implementation",
                description: "We implement your cloud solutions with minimal disruption to your business operations.",
                icon: "Cog"
            },
            {
                title: "Stage 4: Optimization & Support",
                description: "Ongoing optimization and support to ensure your cloud environment continues to meet your evolving business needs.",
                icon: "TrendingUp"
            }
        ],
        useCases: [
            {
                title: "Ecopeaks Limited - Enterprise Client Management Platform",
                description: "Ecopeaks Limited required a comprehensive client management platform to address critical business challenges including data fragmentation, manual processes, and limited client accessibility. We delivered a multi-tier React.js SPA with CloudFront CDN, Node.js microservices on ECS Fargate, and PostgreSQL Multi-AZ with ElastiCache Redis. The solution achieved 99.5% system uptime, 60% reduction in project delivery time, and support for 10x client growth.",
                image: "/ecopeaksgroup.png"
            },
            {
                title: "Blythe and Junot - Scalable Cloud File Sharing",
                description: "Blythe and Junot, a leading Nigerian manufacturer and distributor of hygiene, personal, and dental care products, needed a modern file-sharing solution. We implemented a scalable file-sharing architecture using Amazon S3 and AWS Storage Gateway with AWS File Gateway for secure SMB access. The solution provides cloud-first, highly accessible file-sharing that supports both in-office and remote teams effortlessly.",
                image: "/blytheandjunot.png"
            },
            {
                title: "Gozian Healthcare - Cloud Data Warehouse Migration",
                description: "Gozian Healthcare partnered with us to migrate their 5TB+ on-premise MS SQL data warehouse to AWS with minimal downtime. We delivered a fully managed cloud analytics platform using AWS Database Migration Service (DMS), Glue for ETL, and Amazon Redshift. The result is a fast, secure, and scalable analytics platform that delivers real-time insights while reducing operational overhead.",
                image: "/gozianhealthcare.png"
            },
            {
                title: "Olive & Olive - Unified Digital Platform",
                description: "Olive & Olive needed to unify four business verticals—IT Services, Energy Solutions, eCommerce, and Advisory—into a single digital ecosystem. We delivered a multi-tenant, cloud-native platform on AWS with Amazon Cognito for unified authentication and ECS Fargate microservices. The solution automates manual workflows, enables single sign-on across all services, and drives revenue growth while expanding to five Nigerian states plus Ghana.",
                image: "/oliveandolive.png"
            }
        ],
        faqs: [
            {
                question: "What is the AWS SMB Competency?",
                answer: "The AWS SMB Competency is a designation that recognizes AWS Partners with proven expertise in helping small and medium-sized businesses successfully adopt and leverage AWS services. Partners must demonstrate technical proficiency and documented customer success in working with SMBs. Our case studies with Ecopeaks Limited, Blythe and Junot, Gozian Healthcare, and Olive & Olive demonstrate our proven track record in delivering successful SMB solutions."
            },
            {
                question: "How does the AWS SMB Competency benefit my business?",
                answer: "Working with an AWS SMB Competency Partner ensures you're partnering with a company that understands the unique challenges and constraints of SMBs. We provide solutions that are appropriately sized and priced for your business, with implementation approaches that minimize disruption and maximize value."
            },
            {
                question: "What types of AWS solutions are appropriate for SMBs?",
                answer: "SMBs can benefit from a wide range of AWS solutions, including infrastructure hosting, backup and disaster recovery, security and compliance, application hosting, and data analytics. The key is right-sizing these solutions to match your business needs and budget."
            },
            {
                question: "How can SMBs control cloud costs?",
                answer: "We help SMBs control cloud costs through proper architecture design, resource sizing, reserved instance planning, and ongoing optimization. Our solutions include monitoring and alerting for cost anomalies and regular reviews to identify savings opportunities."
            },
            {
                question: "Can SMBs achieve the same security levels as larger enterprises?",
                answer: "Yes, AWS provides enterprise-grade security capabilities that can be implemented for businesses of all sizes. As an AWS SMB Competency Partner, we help implement security best practices that are appropriate for your business size, compliance requirements, and risk profile."
            }
        ]
    }
]

export function getServiceById(id: string): AWSService | undefined {
    return awsServices.find((service) => service.id === id)
}

